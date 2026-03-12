import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { getAuth, signOut } from 'firebase/auth';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export class Header extends Component {
  render() {
    return (
        <View style={{display:'flex',flexDirection:'row',
        alignItems:'center',justifyContent:'space-between'}}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:7,
                alignItems:'center'
                }}>
                <Image source={require('../../assets/doc1.webp')}
                style={{width:45,height:45,borderRadius:99}}
                />
                <View>
                    <Text style={{fontFamily:'appfont'}}>Hello,👋 </Text>
                </View>
            </View>
            <Ionicons name="notifications-outline" 
            size={28} 
            color="black" />
        </View>
    )
  }
}

export default Header
