import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {Auth} from 'aws-amplify';
import {Calendar, Calender} from 'react-native-calendars';

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

const Home  = ({navigation}) => {
    return (
        <View style={[styles.main, {paddingBottom:10}]}>
            <View style={styles.shadow}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ padding: 6, justifyContent: 'center', fontSize: 28, fontWeight:'bold' }}>
                    28
                    </Text>
                    <Text style={{ padding: 6, justifyContent: 'center', color: '#515359' }}>
                    days {"\n"}active
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', padding: 10, borderRadius: 5, }}>
                    <Text style={{ backgroundColor: 'rgba(97, 191, 189, 0.1)', padding: 5, borderRadius: 10, color: '#64BFBD' }}>22 Feb - 11 Mar</Text>
                </View>
                
            </View>
            <View style={styles.calendarShadow}>
                <Calendar style={{borderBottomLeftRadius:30, borderBottomRightRadius:30, borderTopLeftRadius:30,borderTopRightRadius:30}}/>
            </View>
            <View style={{ flexDirection: 'row', width:'90%', justifyContent:'space-between'}}>
                <View style={[styles.shadowSub, {width:'47.5%'}]}>
                    <Text style={{padding: 6, justifyContent: 'center', fontSize: 28, fontWeight:'bold'}}>
                        5
                    </Text>
                    <Text style={{padding: 6, justifyContent: 'center', color: '#515359'}}>
                        Active days
                    </Text>
                </View>
                <View style={[styles.shadowSub, {width:'47.5%'}]}>
                    <Text  style={{padding: 6, justifyContent: 'center', fontSize: 28, fontWeight:'bold'}}>
                        5
                    </Text>
                    <Text style={{padding: 6, justifyContent: 'center', color: '#515359'}}>
                        Week streak
                    </Text>
                </View>
       
            </View >
            <View style={[styles.shadow,{ flexDirection: 'row', width:'90%', padding:10,alignItems:'center', justifyContent:'center'}]}>
                    <Text > 16 Days </Text>
                    <Text> / last 31 days</Text>
            </View>
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
    },    
    shadow: {
        backgroundColor:'#ffffff',
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        flexDirection:'row',
        padding: 5, 
        borderRadius: 10,
        justifyContent:'space-between',
        width:'90%'
    },
    shadowSub: {
        backgroundColor:'#ffffff',
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
        justifyContent:'center',
        alignItems:'center'
    },
    calendarShadow:{
        backgroundColor:'#ffffff',
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        borderRadius: 10,
        width:'90%'
    }
})

export default Home;