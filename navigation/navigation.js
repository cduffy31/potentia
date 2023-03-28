/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import { ColorSchemeName, Pressable, Alert,Image } from 'react-native';
import {Auth, Hub} from 'aws-amplify';
import Icon from '../assets/icons/Icon';

import useColorScheme from '../hooks/useColorScheme';
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
import NewNote from '../screens/NewNote';
import OldNote from '../screens/OldNote';
import { getHeaderTitle } from '@react-navigation/elements';
 

export default function Navigation({ colorScheme}) {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false);



  const checkUser = async () => {
    try{
      const authUser = await Auth.currentAuthenticatedUser({bypassCache:true});
      setUser(authUser);
    }catch(e){
      setUser(undefined);
    }
    
  }

  useEffect(() => {
    checkUser();
  }, [])

  useEffect(() => {
    const listener = (data) => {
      if(data.payload.event == 'signIn' || data.payload.event == 'signOut'){
        checkUser();
      }
    }
    Hub.listen('auth', listener);
    return () => Hub.remove('auth');
  }, [])

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {
        user == null  ?(
          <AuthenStack/>
        ):(
          <BottomTabNavigator />   
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
        name="NotesScreen"
        component={NotesStackNavigator}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
            if (routeName === 'OldNote' || routeName === 'NewNote') {
              return { display: "none" }
            }
            return
          })(route),
          title: 'Notes',
          headerShown: false,
          tabBarVisible: false,
          tabBarIcon: ({ color, size }) => <Icon name='notes' size={size+5} color={color} />
        })}
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

 const NoteStack = createNativeStackNavigator();
 function NotesStackNavigator(){
  return(
    <NoteStack.Navigator screenOptions={{
      headerShown: false    }}>
      <NoteStack.Screen name={'NotesPage'} component={Notes} options={{title: 'NotesPage'}}/>
      <NoteStack.Screen name={'NewNote'} component={NewNote} options={{title: 'NewNote',tabBarStyle:{display:'none'}}}/>    
      <NoteStack.Screen name={'OldNote'} component={OldNote} options={{title: 'OldNote',tabBarVisible:false}}/>    
    </NoteStack.Navigator>
  );
 }
 


 