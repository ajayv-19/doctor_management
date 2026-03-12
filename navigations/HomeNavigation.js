import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Homescreen'
// import BookAppointment from '../Screens/BookAppointment';
import DocDetails from '../screens/DocDetails'
import BookAppointment from '../screens/BookAppointment'

const Stack=createStackNavigator();
export default function Homenavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='doc-details' component={DocDetails} />
        <Stack.Screen name='book-appointment' component={BookAppointment} />
    </Stack.Navigator>
  )
}