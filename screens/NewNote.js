import React, {useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet, ScrollView, Modal, TextInput, Alert} from 'react-native';
import {Auth} from 'aws-amplify';
import {API, graphqlOperation, DataStore} from 'aws-amplify';
import {createNotes} from '../src/graphql/mutations';
import {Notes} from '../src/models'

import {

    RegText,
    Colors,
} from '../components/styles.js';

const {brand, darkLight} = Colors;

const NewNote = ({navigation}) => {
    const [value,setText] = useState("");
    const [saved, setSaved] = useState(false);
    const [date, setDate] = useState("");

    const saveNote = async () =>{
        if (value == ""){
            Alert.alert("Please write before saving")
        }else if(saved == true){
            Alert.alert("Saved");
        }else{
            try{
                const newNote = await DataStore.save(new Notes({
                    date:date,
                    content:value
                }));
            }catch(err){
                Alert.alert(err);
            }
            setSaved(true);
        }
    }

    const change = (text) =>{
        setText(text);
        setSaved(false);
    }
    const leave = () =>{
        if(saved == false){
            Alert.alert('Are you sure you want to leave without saving?', 'closing will delete the note',[
                {
                    text:"Don't Save",
                    onPress: () => navigation.navigate('NotesPage')
                },
                {
                    text:'Save',
                    onPress: () => saveLeave()
                }
            ])
        }else{
            navigation.navigate('NotesPage')
        }
    }
    const saveLeave = async () =>{
        try{
            const newNote = await DataStore.save(new Notes({
                date:date,
                content:value
            }));
        }catch(err){
            Alert.alert(err);
        }
        navigation.navigate('NotesPage')
    }

    useEffect(() => {
        const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const d = new Date();
        let name = month[d.getMonth()];
        let day = d.getDate();
        let year = String(d.getFullYear());
        year = year.slice(-2)
        setDate(day+" "+name+" "+year);
    })

    return(
        <View >
            <View style={styles.body}>
                <View style={styles.left}>
                    <RegText style={styles.regTest} onPress={leave}> {'<'} </RegText>
                </View>
                <View style={styles.center}>
                    <Text style={styles.text}>
                        Add Note
                    </Text>
                    <Text>
                        {date}
                    </Text>
                </View>
                <View style={styles.right}>
                    <RegText style={styles.regTest1} onPress={saveNote}> Save </RegText>
                </View>
            </View>
            <TextInput 
            editable
            multiline
            numberOfLines={30}
            maxLength={360}
            onChangeText={(text) => change(text)}
            value={value}
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
        fontSize:17,
        paddingLeft:15,
        color:'#2C96BF',
    },regTest1:{
        fontSize:17,
        color:'#2C96BF',
        paddingRight:15
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

export default NewNote;