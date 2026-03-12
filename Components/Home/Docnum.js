import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'
import color from '../../assets/shared/color'

export default function Docnum({hospital}) {
    return (
      <View 
      style={{width:250,
      borderWidth:1,
      borderColor:color.LIGHT_GRAY,
      borderRadius:10,
      marginRight:10}}>
        <Image source={{uri:hospital.attributes.Image.data.attributes.url}}
        style={{width:'100%',height:240,borderTopLeftRadius:10,
      borderTopRightRadius:10}}
  
        />
        <View style={{padding:7}}>
          <Text style={{fontFamily:'appfont-semi',
      fontSize:16}}>{hospital.attributes.Name}</Text>
          <Text style={{color:color.GRAY}}>{hospital.attributes.Email}</Text>
  
        </View>
      </View>
    )
  }