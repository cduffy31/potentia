import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import {Formik} from 'formik';
import {View, StyleSheet, Alert, Text} from 'react-native'
import {Octicons, Ionicons} from '@expo/vector-icons';
import {Auth} from 'aws-amplify';

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

const Reset = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(0);
    return(
        <StyledContainer >
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <RegText style={style.regTest} onPress={() => navigation.navigate('Login')}>back</RegText>
                <RegText style={style.reg} onPress={() => navigation.navigate('SignUp')}>Register</RegText>
            </View>
            <StatusBar style='dark' />
            <PageTitle style={{ paddingTop:70}}>Forgotten Password</PageTitle>
            <InnerContainer style={{flex:1, alignItems:'center', paddingTop:20}}>
                <StyledFormArea style={{justifyContent:"space-between"}}>
                    <Formik 
                        initialValues={{email:''}}
                        onSubmit={values =>{
                                try{
                                    const response = Auth.forgotPassword(values.email);
                                    console.log(response);
                                    navigation.navigate('Confirm');
                                }catch(e){
                                    Alert.alert("Doesnt work");
                                }
                            }
                        }
                    >
                    {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                        <StyledTextInput 
                            label="Email"
                            placeholder="Email"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <View>
                            <Text style={style.slogan}>
                                We will send you an email with a code to reset
                            </Text>
                        </View>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText style={style.button}>
                                Next
                            </ButtonText>
                        </StyledButton>
                    </StyledFormArea>)}
                    </Formik>
                </StyledFormArea>
            </InnerContainer>
        </StyledContainer>
    );
}

const style = StyleSheet.create({
    shadowEffect:{
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    button:{
        textAlign: 'center',
    },
    reg:{
        alignSelf: 'flex-end',
        fontSize:'17px',
        color:'#2C96BF',
    },
    slogan:{
        fontSize:'17px',
        color:' #3C3E42',
        paddingTop:20,
        paddingBottom:20,
    },regTest:{
        alignSelf: 'flex-start',
        fontSize:'17px',
        color:'#2C96BF',
    }
});

export default Reset;