import React, {useState, useEffect} from 'react';
import {Image, View, Text, StyleSheet, ScrollView, Modal, TextInput, Alert, Button, TouchableOpacity} from 'react-native';
import {Auth} from 'aws-amplify';
import {API, graphqlOperation, DataStore} from 'aws-amplify';
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
    const [showButton, setShowButtton] = useState(false);

    const leave = () =>{
        if(saved == false){
            Alert.alert('Are you sure you want to leave without saving?', 'closing will delete the note',[
                {
                    text:"Don't Save",
                    onPress: () => navigation.navigate('NotesPage')
                },
                {
                    text:'Save',
                    onPress: leaveSave,
                }
            ])
        }else{
            navigation.navigate('NotesPage')
        }
    }
    const loadNote = async () =>{
        try{
            const note = await DataStore.query(Notes, (c)=>c.id("eq",id));
            setText(note[0].content);
            setDates(note[0].date);
        }catch(err){
            console.log(err)
            Alert.alert("could not load notes please contact admin if the problem persists");
        }
    }

    const leaveSave = () =>{
        save();
        navigation.navigate('NotesPage');
    }

    useEffect(() =>{
        loadNote();
    },[]);

    const loadLowerButtons = () =>{
        setShowButtton(true);
    }

    const save = async () =>{
        setShowButtton(false);
        try{
            const updatedNote = await DataStore.query(Notes, (c)=>c.id("eq",id));
            const updatedCopy = Notes.copyOf(updatedNote[0], updated => {
                updated.content = value;
            });
            const saved = await DataStore.save(updatedCopy); 
            setSaved(true);     
        }catch(err){
            Alert.alert("couldn't save edits");          
        }

    }
    const del = async () =>{
        setShowButtton(false);
        try{
            let note = await DataStore.query(Notes, (c)=>c.id.eq(id));
            note = note[0];
            DataStore.delete(note);
            navigation.navigate('NotesPage');
        }catch(err){
            Alert.alert("Could not delete");
        }
      

    }

    return(
        <View>
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
                    <RegText style={styles.regTest1} onPress={loadLowerButtons}> ... </RegText>
                </View>
            </View>
            <TextInput 
            editable
            multiline
            value={value}
            maxLength={360}
            onChangeText={text => setText(text)}
            style={styles.inp}/>
            </View>
            <Modal 
                visible={showButton}
                transparent={true}
                animationType="fade"
                backdropOpacity={0.3} 
                backdropColor="#000000"

            >   
                <TouchableOpacity
                    onPress={() => setShowButtton(false)}
                    style={styles.backdrop}
                >
                <View style={{flex: 1,justifyContent: 'flex-end',alignItems: 'center',paddingBottom:50}}>
                    <TouchableOpacity onPress={save} style={{width:"100%", alignItems:'center', marginBottom:10}}>
                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <Text style={styles.save}>
                                Save
                            </Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={del} style={{width:"100%", alignItems:'center'}}>
                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <Text style={styles.delete}>
                                Delete
                            </Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            </Modal>
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
        paddingBottom:50
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
    },
    outer:{
        backgroundColor:'#ffffff',
        width:'90%', 
        height:58,
        alignItems:'center', 
        justifyContent:'center',
        borderRadius:10
    },
    inner:{
        alignItems:'center', backgroundColor:'#ffffff', justifyContent:'center'
    },
    save:{
        color:'#2C96BF', fontWeight:'400', fontSize:23
    },
    delete:{       
        color:'#E7764B', fontWeight:'400', fontSize:23
    },backdrop: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },

})

export default OldNote;