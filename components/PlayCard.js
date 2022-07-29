import React from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';

const PlayCard = (props) => {
    return (
        <View style={styles.item}>
            <View style={{flex:3}}>
                <View style={{flexDirection:'row', flex:1}}>
                    <Text style={{bottomPadding:10, fontSize:14,flex:1}}>
                        {props.date}
                    </Text>
                    <Text style={{bottomPadding:10, flex:1}}>
                        {props.length} mins
                    </Text>
                </View >
                <View style={{flex:1}}>
                    <Text style={{fontWeight:'bold', paddingLeft:10, flex:1}}>
                        {props.title}
                    </Text>
                </View>
                <View style={{flexDirection:'row', padding:10, flex:1}}>
                    <Text style={{fontWeight:'bold',padding:5}}>
                        {props.played}
                    </Text>
                    <Text style={{padding:5}}>
                          plays
                    </Text>
                </View>
            </View>
            <View style={{flex:1}}>
                <Text>
                    placeholder
                </Text>
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
});

export default PlayCard;