import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import {Image, View, Text, StyleSheet, Button} from 'react-native';

const LinearButton = () => {

    return (
        <LinearGradient 
            colors={['#2C96BF', '#54B4B2']}
            style={styles.button}>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    button:{
        padding: 25,
        width:'50%',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    }
})

export default LinearButton;