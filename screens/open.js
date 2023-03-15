import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, Alert, Image, TouchableOpacity} from 'react-native'
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
    Colors,
    Line,
    RegText,
    OuterContainer,
    MsgBox,
} from '../components/styles.js';

const Open = ({navigation}) =>{
    return(
        <OuterContainer > 
            <RegText style={style.reg} onPress={() => navigation.navigate('SignUp')}>Register</RegText>
            <InnerContainer style={{backgroundColor:'#ffffff', justifyContent:'space-around', backgroundColor:'#ffffff'}}>
                    <View style={{ alignItems:'center', justifyContent:'space-around', backgroundColor:'#ffffff'}} >
                        <View>
                            <Image 
                                style={{  
                                    height: 200,
                                    width:200,
                                    }}
                                source={require('../assets/images/icon1.png')}
                                resizeMode="contain"/>
                            <Image  style={{ 
                                    height: 30,
                                    width:200
                                    }}
                                source={require('../assets/images/logoHome.png')}
                                resizeMode="contain"/>
                        </View>
                    </View>
                        <TouchableOpacity onPress={() => navigation.push('Login')} style={{ alignSelf:'stretch'}}>
                            <LinearGradient colors={['#2C96BF','#54B4B2']} style={{paddingBottom:15, paddingTop:15, borderRadius:10}}>
                                <ButtonText style={style.button}>
                                    Sign In
                                </ButtonText>
                            </LinearGradient>
                        </TouchableOpacity>
            </InnerContainer>
        </OuterContainer>
    );
}
const style = StyleSheet.create({
    reg:{
        alignSelf: 'flex-end',
        fontSize:17,
        color:'#2C96BF',
    },
    button:{
        textAlign: 'center',
    },
    slogan:{
        fontSize:17,
        color:' #3C3E42',
        paddingTop:20,
    }
})
export default Open;