import React, {useState} from 'react';
import {Image, Button, View, Text, StyleSheet, ScrollView, TouchableOpacity,Modal} from 'react-native';
import {Auth} from 'aws-amplify';
import NewNote from './NewNote.js';
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

import Icon from '../assets/icons/Icon';



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

    const oldNote = (noteDetails) =>{

    }

    const newNote = () => {

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
                            <View style={{flex:7, paddingTop:15, paddingLeft:10}}>
                            <Text style={{marginBottom:9, color:'#7A7A7A'}}>
                                31 march 2022
                            </Text>
                            <Text numberOfLines={1} style={{marginBottom:10}}>
                                {
                                    noteCheck(note)
                                }
                            </Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <TouchableOpacity onPress={oldNote}>
                                    <Icon name="eye" color="#2C96BF"  size={30}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        )
                    )
                }
            </ScrollView>
            <TouchableOpacity onPress={newNote}>
                <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#F5F5F5', marginBottom:15}}>
                    <LinearGradient colors={['#2C96BF','#54B4B2']} style={styles.button} >
                        <Text style={{fontSize:30, paddingRight:10, color:"#FFFFFF"} }>
                            +   
                        </Text>

                        <Text style={{paddingTop:5, color:"#FFFFFF"}}>
                            New Note
                        </Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
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
        padding: 15,
        width:'50%',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5,
        flexDirection:'row'
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
    },
    text:{
       // backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    }
})

export default Notes;