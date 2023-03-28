import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import {Formik} from 'formik';
import {View, StyleSheet, Alert, TouchableOpacity} from 'react-native'
import {Octicons, Ionicons} from '@expo/vector-icons';
import {Auth} from 'aws-amplify';
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
    OuterContainer,
    ButtonText,
    RegText,
    Colors,
    Line,
    MsgBox,
} from '../components/styles.js';

const {brand, darkLight} = Colors;

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(0);
    const [loading, setLoading] = useState(0);

    return(
        <OuterContainer>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <RegText style={style.regTest} onPress={() => navigation.navigate('Open')}>back</RegText>
                <RegText style={style.reg} onPress={() => navigation.navigate('SignUp')}>Register</RegText>
            </View>
            <StyledContainer>
                <StatusBar style='dark' />
                <PageTitle style={{alignText:'right'}}>Sign In</PageTitle>

                    <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={ async(values) => {
                        if(loading){
                            return;
                        }
                        setLoading(true);
                        try{
                            const response = await Auth.signIn(values.email, values.password)
                                .then((user) =>{
                                    if(user.challengeName=='NEW_PASSWORD_REQUIRED'){
                                        console.log("in if")
                                        Auth.completeNewPassword(
                                            user, 
                                            values.password,
                                        )
                                    }
                                })
                            //console.log(response);
                        }catch(e){
                            Alert.alert(e.message);
                        }finally{
                            setLoading(false);
                        }

                    }}
                    style={{justifyContent:"space-between", }}
                    >
                        {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea style={{justifyContent:"space-between"}}>
                                <StyledTextInput 
                                    label="Email"
                                    placeholder="Enter your email"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />
                                <StyledTextInput 
                                    label="Password"
                                    placeholder="Enter your password"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={true}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                            {/*<MsgBox>...</MsgBox>*/}
                            <SubTitle onPress={() => navigation.navigate('Reset')}>Forgot password?</SubTitle>
                            <TouchableOpacity onPress={handleSubmit} style={{justifyContent:'center', alignItmes:'center'}}>
                                <LinearGradient colors={['#2C96BF','#54B4B2']} style={{paddingBottom:15, paddingTop:15, borderRadius:10}}>
                                    <ButtonText style={style.button}>
                                        Sign In
                                    </ButtonText>
                                </LinearGradient>
                            </TouchableOpacity>
                        </StyledFormArea>)}
                </Formik>
            </StyledContainer>
        </OuterContainer>
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
        alignSelf: 'flex-end',
        fontSize:17,
        color:'#2C96BF',
    }, regTest:{
        alignSelf: 'flex-start',
        fontSize:17,
        color:'#2C96BF',
    }
});

export default Login;