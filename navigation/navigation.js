/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Alert,Image } from 'react-native';
import {Auth, Hub} from 'aws-amplify';
import Icon from '../assets/icons/Icon';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Open from '../screens/open';
import Login from '../screens/login';
import Reset from '../screens/Reset';
import SignUp from '../screens/signup';
import Confirm from '../screens/confirm';
import Splash from '../screens/Splash';
import Home from '../screens/calander';
import Profile from '../screens/profile';
import Notes from '../screens/notes';
import Play from '../screens/play';
import Library from '../screens/Library';
 

 export default function Navigation({ colorScheme}) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(undefined);
    const checkUser = async () =>{
        try {
          const auth = await Auth.currentAuthenticatedUser({bypassCache: true});
          setIsLoggedIn(auth);
      } catch(e) {
          setIsLoggedIn(null);
      }
    }
    React.useEffect(() =>{
        const listener = () =>{
            checkUser();
        }

    },[]);
    React.useEffect(() =>{
      const listener = (data) =>{
        setIsLoggedIn(undefined);
      }
      Hub.listen('auth', listener);
      return () => Hub.remove('auth', listener);
    },[]);

    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {
          isLoggedIn == null  ?(
            <BottomTabNavigator/>
          ):(
            <AuthenStack />   
          )
        }
      </NavigationContainer>
    );
  }

function Title(){
    return(
        <Image      
            style={{ flex: 1, aspectRatio:4, resizeMode:'contain'}}
            source={require('../assets/images/logoHome.png')}
         />
    );
}

  
  /**
   * A root stack navigator is often used for displaying modals on top of all other content.
   * https://reactnavigation.org/docs/modal
   */
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator();
 
 function RootNavigator() {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
     </Stack.Navigator>
   );
 }
 
 /**
  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
  * https://reactnavigation.org/docs/bottom-tab-navigator
  */
 const BottomTab = createBottomTabNavigator();
 
 function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTab.Navigator
       initialRouteName="Home"
       screenOptions={{
         tabBarActiveTintColor: '#2C96BF',
         headerStyle:{
            backgroundColor:'#F5F5F5',
            shadowOffset: { height: 0, width: 0 },
         },
       }}>
       <BottomTab.Screen
         name="Home"
         component={Home}
         options={{ 
          headerTitle: (props) => <Title {...props} />,
          tabBarIcon: ({color, size}) => <Icon name='home' size={size+5} color={color}/>
        }}
       />
       <BottomTab.Screen
         name="Library"
         component={Library}
         options={{
           title: 'Library',
           tabBarIcon: ({color, size}) => <Icon name='local_library' size={size+5} color={color}/>
         }}
       />
        <BottomTab.Screen
         name="Play"
         component={Play}
         options={{
           title: 'Play',
           headerStyle:{
            backgroundColor:'#FEFEFE',
            shadowOffset: { height: 0, width: 0 },
           },
           tabBarIcon: ({color, size}) => <Icon name='music_note' size={size+5} color={color}/>
         }}
       />
        <BottomTab.Screen
         name="Notes"
         component={Notes}
         options={{
           title: 'Notes',
           tabBarIcon: ({color, size}) => <Icon name='notes' size={size+5} color={color}/>
         }}
       />
        <BottomTab.Screen
         name="Profile"
         component={Profile}
         options={{
           title: 'Profile',
           tabBarIcon: ({color, size}) => <Icon name='person' size={size+5} color={color}/>
         }}
       /> 
     </BottomTab.Navigator>
   );
 }
 
 const AuthStack = createNativeStackNavigator();
 
 function AuthenStack(){
   return(
     <AuthStack.Navigator screenOptions={{
       headerShown: false,
     }}>
       <AuthStack.Screen name={'Open'} component={Open}/>
       <AuthStack.Screen name={'Login'} component={Login}/>
       <AuthStack.Screen name={'Reset'} component={Reset}/>
       <AuthStack.Screen name={'SignUp'} component={SignUp}/>
       <AuthStack.Screen name={'Confirm'} component={Confirm}/>
     </AuthStack.Navigator>
   );
 }
 
 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
 