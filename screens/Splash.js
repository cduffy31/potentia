import React from 'react';
import {Image, View} from 'react-native';

const Splash = () =>{
    return(
        <View style={{flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'}}>
            <Image source={require('../assets/images/icon1.png')} style={{ alignself:'center',height:200, width:200}} />
        </View>
    )
}
export default Splash;