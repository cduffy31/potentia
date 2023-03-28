import  React, { useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {Auth, sectionBody} from 'aws-amplify';
import {Audio} from 'expo-av';
import { RootTabScreenProps } from '../types';
import { LinearGradient } from 'expo-linear-gradient';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledButton,
    StyledTextInput,
    StyledTextLabel,
    ButtonText,
    RegText,
    Colors,
    Line,
    MsgBox,
} from '../components/styles.js';
import Icon from '../assets/icons/Icon';

const {brand, darkLight} = Colors;

const Play = () => {

    const [sound, setSound] = useState();
  const [playing, setPlaying] = useState(false);

  async function playSound() {
    if(sound == undefined){
      const { sound } = await Audio.Sound.createAsync( require('../assets/audio/sample.mp3')
      );
      setSound(sound);
      await sound.playAsync();
      setPlaying(true)
    }else if(playing == true){
      setPlaying(false)
      await sound.pauseAsync();
      
    }else if(playing == false){
      setPlaying(true)
      await sound.playAsync();
    }
  }

  /*useEffect( async() => {
    return sound
      ? async () => {
            await sound.unloadAsync();
        }
      : undefined;
  }, [sound]);*/


    return (
        <View style={{flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:'#FEFEFE'}}>
            <Image source={require('../assets/images/icon1.png')} style={{flex:3, alignSelf:'center',height:300, width:300}} resizeMode="contain"/>
            <View style={{flex:1}}>
            <TouchableOpacity resizeMode='contain' style={style.styled} onPress={playSound}>
                <LinearGradient colors={['#2C96BF','#54B4B2']} style={style.styled}>
                    <Icon name={playing ? 'pause' : "Arrow---Right-2"} color='#F5F5F4' size={40} />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    button:{
        justifyContent:'center',
        paddingBottom:10
    },
    styled:{
        alignItems:'center', 
        height:75,
        width:75, 
        flexDirection:'column',
        borderRadius:10,
        justifyContent:'center'
    }
});


export default Play;
