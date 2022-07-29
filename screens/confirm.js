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

const Confirm = ({navigation}) =>{
    const [hidePassword, setHidePassword] = useState(0);
    return(
        <StyledContainer>
            <StatusBar style='dark' />
            <PageTitle style={{ paddingTop:50}}>Reset Password</PageTitle>
            <InnerContainer>
                <StyledFormArea>
                    <Formik
                        initialValues={{password:'', code:'',email:'',conPassword:''}}
                        onSubmit={ async(values) => {
                                try{
                                    const response = await Auth.forgotPasswordSubmit(values.email,values.code, values.password);
                                    Alert.alert("Password Reset");
                                    navigation.navigate('Login');
                                }catch(e){
                                    Alert.alert(e);
                                }
                            }
                        }
                        style={{justifyContent:"space-between"}}
                    >
                        {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea style={{justifyContent:"space-between"}}>
                                <StyledTextInput 
                                    label="Code"
                                    placeholder="Enter code"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('code')}
                                    onBlur={handleBlur('code')}
                                    value={values.code}
                                />
                                <StyledTextInput 
                                    label="Email"
                                    placeholder="Email"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('code')}
                                    onBlur={handleBlur('code')}
                                    value={values.email}
                                />
                                <StyledTextInput 
                                    label="Password"
                                    placeholder="Enter your new password"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    isPassword={true}
                                    setHidePassword={setHidePassword}
                                />                                
                                <StyledTextInput 
                                    label="confirmPassword"
                                    placeholder="Confirm your new password"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('conPassword')}
                                    onBlur={handleBlur('conPassword')}
                                    value={values.conPassword}
                                    isPassword={true}
                                    setHidePassword={setHidePassword}
                                />
                            <StyledButton onPress={handleSubmit} style={{justifyContent:'center', alignItmes:'center'}}>
                                <ButtonText style={style.button}>
                                    Next
                                </ButtonText>
                            </StyledButton>
                        </StyledFormArea>)}
                    </Formik>
                    <RegText style={style.reg} onPress={() => navigation.navigate('Login')}>Already have an account?</RegText>
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
    },    reg:{
        alignSelf: 'flex-start',
        fontSize:'17px',
        color:'#2C96BF',
    },
});

export default Confirm;