import React, {useState, useEffect} from 'react';
import {Image, View, Text, StyleSheet, ScrollView, Modal, TextInput, Alert} from 'react-native';
import {Auth} from 'aws-amplify';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../src/graphql/queries';
import { Notes } from '../src/models';

import {
    RegText,
    Colors,
} from '../components/styles.js';

const OldNote = ({navigation, route}) => {
    const [value,setText] = useState("");
    const [saved, setSaved] = useState(false);
    const {id} = route.params;
    const [date, setDates] = useState(null);


    const leave = () =>{
        if(saved == false){
            Alert.alert('Are you sure you want to leave without saving?', 'closing will delete the note',[
                {
                    text:"Don't Save",
                    onPress: () => navigation.navigate('NotesPage')
                },
                {
                    text:'Save',
                    onPress: () => navigation.navigate('NotesPage')
                }
            ])
        }else{
            navigation.navigate('NotesPage')
        }
    }
    const loadNote = async () =>{
        const note = await API.graphql({
            query:queries.getNotes,
            variables:{id:id}
        })
        setText(note.data.getNotes.content)
        setDates(note.data.getNotes.date)
    }
    useEffect(() =>{
        loadNote();
    });

    return(
        <View >
        <View style={styles.body}>
            <View style={styles.left}>
                <RegText style={styles.regTest} onPress={leave}> {'<'} </RegText>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>
                    Notes
                </Text>
                <Text>
                    {date}
                </Text>
            </View>
            <View style={styles.right}>
                <RegText style={styles.regTest1}> ... </RegText>
            </View>
        </View>
        <TextInput 
        editable
        multiline
        value={value}
        numberOfLines={30}
        maxLength={360}
        onChangeText={text => setText(text)}
        style={styles.inp}/>
        </View>

    );  
}

const styles = StyleSheet.create({
    body:{
        paddingTop:50,
        flexDirection:'row',
        backgroundColor:'#F5F5F5',
        paddingBottom:10,
    },
    text:{
        fontSize:17, 
        color:'black', 
        fontWeight:'600', 
    },regTest:{
        fontSize:25,
        paddingLeft:15,
        color:'#2C96BF',
    },regTest1:{
        fontSize:25,
        color:'#2C96BF',
        paddingRight:15,
    },inp:{
        backgroundColor:"#ffffff",
        width:'85%',
        alignSelf:'center',
        height:'90%',
        borderRadius:10,

    },
    center:{
        alignItems: 'center', 
        alignContents:'center',
        flex:1,
    },
    left:{
        alignItems:'flex-start', 
        alignContents:'center',
        flex:1,
    },
    right:{
        alignItems:'flex-end', 
        alignContents:'center',
        flex:1,
    }

})

export default OldNote;