import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, Alert, Image} from 'react-native'
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
                    <StyledButton onPress={() => navigation.push('Login')} style={{ alignSelf:'stretch'}}>
                            <ButtonText style={style.button}>
                                Sign In
                            </ButtonText>
                        </StyledButton>
            </InnerContainer>
        </OuterContainer>
    );
}
const style = StyleSheet.create({
    reg:{
        alignSelf: 'flex-end',
        fontSize:'17px',
        color:'#2C96BF',
    },
    button:{
        textAlign: 'center',
    },
    slogan:{
        fontSize:'17px',
        color:' #3C3E42',
        paddingTop:20,
    }
})
export default Open;