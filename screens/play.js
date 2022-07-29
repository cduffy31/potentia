import React, {useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {Auth} from 'aws-amplify';
import {Audio} from 'expo-av';
import { RootTabScreenProps } from '../types';

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

const {brand, darkLight} = Colors;

const tape ={
    id:1,
    title:'help yourself',
    uri:'../assets/audio/sample.mp3',

}

const Play = () => {
    {/*const [sound, setSound] = useState(null);
    const didMount = async () =>{
        Audio.setAudioModeAsync({});
        const sound = new Audio.Sound();
        setSound(sound);
        const status = {
            shouldPlay:false
        }
        sound.loadAsync(require('../assets/audio/sample.mp3'), status, false);
    }

    const playSound = () =>{
        didMount();
        await sound.playAsync();
    }*/}

    return (
        <View style={{flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:'#FEFEFE'}}>
            <Image source={require('../assets/images/icon1.png')} style={{flex:3, alignSelf:'center',height:200, width:200}} resizeMode="contain"/>
            <View style={{flex:1}}>
            <StyledButton  >
                <ButtonText>
                    Play
                </ButtonText>
            </StyledButton>
            </View>
        </View>
    );
}

export default Play;
