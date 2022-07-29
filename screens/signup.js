import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import {Formik} from 'formik';
import {View, StyleSheet, Alert} from 'react-native'
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

const SignUp = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(0);
    return(
        <StyledContainer>
            <RegText style={style.regTest} onPress={() => navigation.navigate('Login')}>back</RegText>
            <StatusBar style='dark' />
            <InnerContainer style={{flex:1, alignItems:'center'}}>
                <PageTitle>Potentia</PageTitle>
                <Formik
                    initialValues={{name:'', email: '', confirmE:'', password: '', confirmP:''}}
                    onSubmit={async(values) => {
                        Alert.alert("Portal closed please contact sarah@potentia.com")
                        /*
                        const {password, email, name} = values;
                        try{
                            const response = await Auth.signUp({
                                password,
                                attributes:{
                                    email,
                                    name,
                                    preffered_username: email
                                }
                            });
                            console.log(response);
                        }catch(e){
                            Alert.alert(e);
                        }*/
                    }}
                    style={{justifyContent:"space-between", }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea style={{justifyContent:"space-between"}}>
                        <StyledTextInput 
                            label="Email"
                            placeholder="Full Name"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        <StyledTextInput 
                            label="Email"
                            placeholder="Email"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <StyledTextInput 
                            label="Email"
                            placeholder="Confirm Email"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('confirm')}
                            onBlur={handleBlur('confirm')}
                            value={values.confirm}
                            keyboardType="email-address"
                        />
                        <StyledTextInput 
                            label="Password"
                            placeholder="Password"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={true}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <StyledTextInput 
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={true}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText style={style.button}>
                                Sign Up
                            </ButtonText>
                        </StyledButton>
                    </StyledFormArea>)}
            </Formik>
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
    },    regTest:{
        alignSelf: 'flex-start',
        fontSize:'17px',
        color:'#2C96BF',
    },
});

export default SignUp;