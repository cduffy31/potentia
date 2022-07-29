import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
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

const Profile = ({navigation}) => {
    return (
        <View style={styles.page}>

            <StyledButton style={styles.logout}>
                <ButtonText style={{}}>
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
    page:{
        justifyContent:'center',
        alignItems:'center',
    }
})
export default Profile;