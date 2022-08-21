import React from 'react';
import {Image, View, Text, StyleSheet, Button} from 'react-native';
import {Auth} from 'aws-amplify';
import Icon from '../assets/icons/Icon';

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
            <StyledButton style={styles.logout}>
                <ButtonText>
                    Log Out
                </ButtonText>
            </StyledButton>
        </View>
    );
}

const styles = StyleSheet.create({
    logout:{
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        backgroundColor:'#ffffff',
        border:1,
        padding:10,
        marginBottom:15,
        width:'90%',
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
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