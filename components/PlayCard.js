import React from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '../assets/icons/Icon';

const PlayCard = (props) => {
    return (
        <View style={styles.item}>
            <View style={{flex:3}}>
                <View style={{flexDirection:'row', flex:1, alignItems:'center'}}>
                    <Icon name='event' color='#ADADAD' size={20}/>
                    <Text style={{bottomPadding:10, fontSize:14,flex:1, paddingLeft:5}}>
                        {props.date}
                    </Text>
                    <Icon name='schedule' color='#ADADAD' size={20}/>
                    <Text style={{bottomPadding:10, flex:1, paddingLeft:10}}>
                        {props.length} mins
                    </Text>
                </View >
                <View style={{flex:1}}>
                    <Text style={{fontWeight:'bold', paddingLeft:10, paddingTop:10, flex:1}}>
                        {props.title}
                    </Text>
                </View>
                <View style={{flexDirection:'row', padding:5, flex:1}}>
                    <Text style={{fontWeight:'bold',padding:5}}>
                        {props.played}
                    </Text>
                    <Text style={{padding:5}}>
                          plays
                    </Text>
                </View>
            </View>
            <View style={styles.icon}>
                <Icon name='Arrow---Right-2' color ='#F5F5F4' size={20} style={{alignItems:'center' ,justifyContent:'center'}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
        item:{
            backgroundColor:'#ffffff',
            padding: 15,
            borderRadius: 10,
            flexDirection:'row',
            alignItems:'center',
            height:120,
            justifyContent: 'space-between',
            marginBottom: 20,
        },
        itemText:{},
        icon:{

            alignItems:'center', 
            backgroundColor:'#2C96BF',
            height:50,
            width:40, 
            justifyContent:'flex-start',
            flexDirection:'column',
            borderRadius:20,
        }
});

export default PlayCard;