import { View, Text } from 'react-native'
import React from 'react'
import color from '../../../assets/shared/color'

export default function HorizontalLine() {
  return (
    <View style={{
        borderBottomWidth: 1,
        borderColor: color.LIGHT_GRAY, margin: 5, 
        marginBottom: 15,
        marginTop:15
    }}></View>
  )
}