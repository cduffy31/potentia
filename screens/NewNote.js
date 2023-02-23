import React, {useState} from 'react';
import {Image, View, Text, StyleSheet, ScrollView, Modal} from 'react-native';
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

const NewNote = ({navigation}) => {
    return(
        <View>
            <Text>
                yo
            </Text>
        </View>
    );  
}
export default NewNote;