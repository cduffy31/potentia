import  React, { useEffect, useState} from 'react';
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
import Icon from '../assets/icons/Icon';

const {brand, darkLight} = Colors;

const tape ={
    id:1,
    title:'help yourself',
    uri:'../assets/audio/sample.mp3',

}

const Play = () => {
    const [sound, setSound] = useState();

    async function playSound(){
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/sample.mp3')
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

    return (
        <View style={{flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor:'#FEFEFE'}}>
            <Image source={require('../assets/images/icon1.png')} style={{flex:3, alignSelf:'center',height:200, width:200}} resizeMode="contain"/>
            <View style={{flex:1}}>
            <StyledButton resizeMode='contain' style={{alignItems:'center', justifyContent:'space-between'}} onPress={playSound}>
                <Icon name="Arrow---Right-2" color='#F5F5F4' size={40} style={{alignSelf:'center'}}/>
            </StyledButton>
            </View>
        </View>
    );
}

export default Play;
