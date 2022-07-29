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
            <View>
                <View >
                    <View style={styles.button}>
                        <Icon name="" size={80} color="#000000"/>
                        <Text>
                            Account Settings
                        </Text>
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

    },
    page:{
        alignItems:'center',
        flex:1,
        justifyContent:'space-between',
        backgroundColor:'#F5F5F5',
        flexGrow: 1,
        alignItems:'center'
    }
})
export default Profile;