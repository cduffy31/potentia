import  React, { useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet, Alert} from 'react-native';
import {Auth, sectionBody} from 'aws-amplify';
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
import Icon from '../assets/icons/Icon';

const {brand, darkLight} = Colors;

const Play = () => {

    const [sound, setSound] = useState();
    const [playing, setPlaying] = useState(false);

    const onPlaybackStatusUpdate = (status) =>{
        console.log(status);
        setPlaying(status.isPlaying);
    }

    async function playSound(){
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/sample.mp3'),
        );
        setSound(sound);
        await sound.playAsync();
    }
    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync(); }
            : undefined;
    });
    const onPlayPausePress = async () =>{
        if(!sound){
            playSound
        }
        if(playing){
            await sound.stopAsync();
        }else{
            await sound.playAsync();
        }
    }

    const _loadSound = () => {
        
    }

    return (
        <View style={{flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:'#FEFEFE'}}>
            <Image source={require('../assets/images/icon1.png')} style={{flex:3, alignSelf:'center',height:300, width:300}} resizeMode="contain"/>
            <View style={{flex:1}}>
            <StyledButton resizeMode='contain' style={{alignItems:'center', justifyContent:'space-between'}} onPress={playSound}>
                <Icon name={playing ? 'pause' : "Arrow---Right-2"} color='#F5F5F4' size={40} style={{justifyContent:'center'}}/>
            </StyledButton>
            </View>
        </View>
    );
}

export default Play;
