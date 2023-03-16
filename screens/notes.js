import React, {useState, useEffect} from 'react';
import {Image, Button, View, Text, StyleSheet, ScrollView, TouchableOpacity,Modal, Alert, RefreshControl} from 'react-native';
import NewNote from './NewNote.js';
import { LinearGradient } from 'expo-linear-gradient';
import {API, graphqlOperation, Auth, DataStore, } from 'aws-amplify';
import * as queries from '../src/graphql/queries';
import {Notes} from '../src/models'
import {
    PageTitle,
} from '../components/styles.js';

import Icon from '../assets/icons/Icon';

const NotesPage = ({navigation}) => {
    const [refreshing, setRefreshing] = useState(false);

    const [testNotes, setTests] = useState([]);

    const noteCheck = (string) => {
        if(string.length < 20){
            return string;
        }else{
            return string.substring(0,16)+" ..."
        }
    }

    const oldNote = (noteDetails) =>{
        navigation.navigate('OldNote',{id:noteDetails})
    }

    const newNote = () => {
        navigation.navigate('NewNote');
    }

    const loadNotes = async () => {   
        try{     
            const testNote = await DataStore.query(Notes);
            setTests(testNote);
        }catch(error){
            Alert.alert("Unable to load")
        }
    }

    const onRefresh = () =>{
        loadNotes();
    }

    useEffect(() => {
        loadNotes()
    }, []);

    return (
        <View style={{flex:1, paddingTop:55, backgroundColor:'#F5F5F5'}}>
            <PageTitle style={{ alignSelf: 'center', fontSize:17, color:'black', fontWeight:'600' }}>
                Notes
            </PageTitle>
            <View style={{flex:1}}>
            <ScrollView style={styles.contain} 
                contentContainerStyle={{ 
                    flexGrow: 1, justifyContent: 'space-start',
                    alignItems:'center' }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                >
                {
                    testNotes.map(
                        (note) =>(
                        <View key={note.id} style={styles.note}>
                            <View style={{flex:7, paddingTop:15, paddingLeft:10}}>
                            <Text style={{marginBottom:9, color:'#7A7A7A'}}>
                                {note.date}
                            </Text>
                            <Text numberOfLines={1} style={{marginBottom:10}}>
                                {
                                    noteCheck(note.content)
                                }
                            </Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <TouchableOpacity onPress={() => oldNote(note.id)}>
                                    <Icon name="eye" color="#2C96BF"  size={30}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        )
                    )
                }
            </ScrollView>
            <View style={{position: 'absolute', bottom:25, right:0, left:0, alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('NewNote')} style={{width:'50%'}}>
                <View style={{justifyContent:'center', alignItems:'center', marginBottom:15}}>
                    <LinearGradient colors={['#2C96BF','#54B4B2']} style={styles.button} >
                        <Text style={{fontSize:30, paddingRight:10, color:"#FFFFFF"} }>
                            +   
                        </Text>

                        <Text style={{paddingTop:5, color:"#FFFFFF", fontSize:15, fontWeight:'600'}}>
                        Add Note
                        </Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
            </View>
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
        padding: 15,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 15,
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

export default NotesPage;