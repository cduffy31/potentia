import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/*import TrackPlayer from 'react-native-track-player';*/

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/navigation';
import { useEffect } from 'react';

import * as Font from 'expo-font';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

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
