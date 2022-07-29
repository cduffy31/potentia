import React from 'react';
import {Image, View, Text, StyleSheet, ScrollView} from 'react-native';
import {Auth} from 'aws-amplify';
import PlayCard from '../components/PlayCard.js';

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


const Library = ({navigation}) => {
    return (
        <View style={styles.main}>
            <ScrollView style={{width:'90%'}}>
                <PlayCard date={'22/12/1999'} length={23} title={"imposter Syndrome"} played={6} />
                <PlayCard date={'22/12/1999'} length={23} title={"imposter Syndrome"} played={6} />
                <PlayCard date={'22/12/1999'} length={23} title={"imposter Syndrome"} played={6} />
                <PlayCard date={'22/12/1999'} length={23} title={"imposter Syndrome"} played={6} />
                <PlayCard date={'22/12/1999'} length={23} title={"imposter Syndrome"} played={6} />
                <PlayCard date={'22/12/1999'} length={23} title={"imposter Syndrome"} played={6} />
                <PlayCard date={'22/12/1999'} length={23} title={"imposter Syndrome"} played={6} />

            </ScrollView>
        </View>

    );
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'#F5F5F5',
        paddingTop:17.5,
        flex:1,
        justifyContent:'space-between',
        alignItems:'center'
    }
})
export default Library;