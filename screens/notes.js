import React, {useState} from 'react';
import {Image, View, Text, StyleSheet, ScrollView, Modal} from 'react-native';
import {Auth} from 'aws-amplify';
import NewNote from './NewNote.js';

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

import Icon from '../assets/icons/Icon';


const {brand, darkLight} = Colors;

const Notes = ({navigation}) => {
    const [modal, setModal] = useState(false);

    const [notes, setNotes] = useState([
        'imposter Syndrome imposter Syndrome imposter Syndrome imposter Syndrome imposter Syndrome imposter Syndrome imposter Syndrome imposter Syndrome imposter Syndrome imposter Syndrome imposter Syndrome imposter Syndrome ',
        'helloWorld',
    ]);

    const noteCheck = (string) => {
        if(string.length < 20){
            return string;
        }else{
            return string.substring(0,16)+" ..."
        }
    }

    return (
        <View style={{flex:1}}>
            <ScrollView style={styles.contain} 
            contentContainerStyle={{ 
                flexGrow: 1, justifyContent: 'space-start',
                alignItems:'center' }}>
                {
                    notes.map(
                        (note,index) =>(
                        <View key={index} style={styles.note}>
                            <View style={{flex:7, paddingTop:10}}>
                            <Text style={{marginBottom:9, color:'#7A7A7A'}}>
                                31 march 2022
                            </Text>
                            <Text numberOfLines={1}>
                                {
                                    noteCheck(note)
                                }
                            </Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <Icon name="eye" color="#2C96BF"  size={30}/>
                            </View>
                        </View>
                        )
                    )
                }
            </ScrollView>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <StyledButton style={styles.button}>
                    <ButtonText>
                        +   Add note
                    </ButtonText>
                </StyledButton>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'#F5F5F5',
        flex:10,
        paddingTop:10,
        //justifyContent:'space-between',
        //alignItems:'center',
    },
    button:{
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
    },
    note:{
        backgroundColor:'#ffffff',
        border:1,
        padding:10,
        marginBottom:15,
        width:'90%',

        elevation: 5,
        padding:5, 
        borderRadius: 10,
        flexDirection:'row',
    }
})

export default Notes;