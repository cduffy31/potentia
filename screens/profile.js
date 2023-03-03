import React from 'react';
import {Image, View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Auth} from 'aws-amplify';
import Icon from '../assets/icons/Icon';
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

const {brand, darkLight} = Colors;

const Profile = ({navigation}) => {
    const signOut = () => {
        Auth.signOut();
    }
    return (
        <View style={styles.page}>
            <View style={[styles.page, {width:'100%'}]}>
                <View  style={[styles.page, {width:'100%'}]}>
                    <View style={[styles.button,{flexDirection:'row', justifyContent:'space-between'}]}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="settings-2" size={40} color="#61BFBD" style={{padding:5}}/>
                            <Text style={styles.text}>
                                Account Settings
                            </Text>
                        </View>
                        <View>
                            <Icon name="Arrow---Right-2" size={40} color="#000000" />
                        </View>
                    </View>
                    <View style={[styles.button,{flexDirection:'row', justifyContent:'space-between'}]}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="settings" size={40} color="#61BFBD" style={{padding:5}}/>
                            <Text style={styles.text}>
                                Notifications
                            </Text>
                        </View>
                        <View>
                            <Icon name="Arrow---Right-2" size={40} color="#000000" />
                        </View>
                    </View>
                    <View style={[styles.button,{flexDirection:'row', justifyContent:'space-between'}]}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="settings-1" size={40} color="#61BFBD" style={{padding:5}}/>
                            <Text style={styles.text}>
                                FAQs
                            </Text>
                        </View>
                        <View>
                            <Icon name="Arrow---Right-2" size={40} color="#000000" />
                        </View>
                    </View>
                    <View style={[styles.button,{flexDirection:'row', justifyContent:'space-between'}]}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Icon name="settings-3" size={40} color="#61BFBD" style={{padding:5}}/>
                            <Text style={styles.text}>
                                Disclaimer
                            </Text>
                        </View>
                        <View>
                            <Icon name="Arrow---Right-2" size={40} color="#000000" />
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.logout} onPress={signOut}>
                <LinearGradient colors={['#2C96BF','#54B4B2']} style={styles.logout}>
                    <ButtonText>
                        Log Out
                    </ButtonText>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    logout:{
        width:'90%',
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15,
        justifyContent:'center',
        borderRadius:10,
    },
    button:{
        backgroundColor:'#ffffff',
        border:1,
        padding:10,
        marginBottom:15,
        width:'90%',
        elevation: 5,
        padding:5, 
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center',

    },
    text:{
        fontSize:17,
    },
    page:{
        alignItems:'center',
        flex:1,
        justifyContent:'flex-start',
        backgroundColor:'#F5F5F5',
        flexGrow: 1,
        alignItems:'center'
    }
})
export default Profile;