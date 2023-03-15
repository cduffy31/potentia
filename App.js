import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/*import TrackPlayer from 'react-native-track-player';*/

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/navigation';
import { useEffect } from 'react';

import * as Font from 'expo-font';

import { Amplify, DataStore } from '@aws-amplify/core'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

let customFonts = {
  'Gilroy-Black' : require('./assets/fonts/Gilroy-Black.ttf'),
  'Gilroy-BlackItalic' : require('./assets/fonts/Gilroy-BlackItalic.ttf'),
  'Gilroy-Bold' : require('./assets/fonts/Gilroy-Bold.ttf'),
  'Gilroy-BoldItalic' : require('./assets/fonts/Gilroy-BoldItalic.ttf'),
  'Gilroy-ExtraBoldItalic' : require('./assets/fonts/Gilroy-ExtraBoldItalic.ttf'),
  'Gilroy-ExtraBold' : require('./assets/fonts/Gilroy-ExtraBold.ttf'),
  'Gilroy-Heavy' : require('./assets/fonts/Gilroy-Heavy.ttf'),
  'Gilroy-HeavyItalic' : require('./assets/fonts/Gilroy-HeavyItalic.ttf'),
  'Gilroy-Light' : require('./assets/fonts/Gilroy-Light.ttf'),
  'Gilroy-LightItalic' : require('./assets/fonts/Gilroy-LightItalic.ttf'),
  'Gilroy-MediumItalic' : require('./assets/fonts/Gilroy-MediumItalic.ttf'),
  'Gilroy-ExtraBold' : require('./assets/fonts/Gilroy-ExtraBold.ttf'),
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useEffect(()=>{
    fontLoad()

}, [])

  const fontLoad = async () => Promise.all([
    await Font.loadAsync({
      'custom-icons':require('./assets/icons/icomoon.ttf')

  })    
  ]);
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme}/>
        <StatusBar />
      </SafeAreaProvider>
    );
}
