import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Prof from '../screens/Prof'
import { FontAwesome } from '@expo/vector-icons';
// import Explores from '../Screens/Explores'
// import HomeScreen from '../screens/Homescreen'
import Homenavigation from './HomeNavigation';
import Appointment from '../screens/appointment';
import Prescription from '../screens/Prescription';
import Presnav from './Presnav';
const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name='Home' component={Homenavigation}

        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name='Appointment' component={Appointment}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name='Prescription' component={Presnav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name='Profile' component={Prof}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}