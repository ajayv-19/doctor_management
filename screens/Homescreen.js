import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import { Header } from '../Components/Home/Header';
import { Search } from '../Components/Home/Search';
import { Slider} from '../Components/Home/Slider';
import TopRatedDocs from '../Components/Home/TopRatedDocs';

const HomeScreen = () => {
  const navigation = useNavigation();

  const auth = getAuth(); // Get the auth instance

  const handleSignOut = () => {
    // Call signOut from firebase/auth, not from the auth object directly
    signOut(auth)
      .then(() => {
        // Signed out successfully
        navigation.replace("Login");
      })
      .catch(error => {
        // An error happened
        alert(error.message);
      });
  };

  return (
    <ScrollView style={{padding:19,
      marginTop:30}}>
      <Header/>
      <Search/>
      <Slider/>
      <TopRatedDocs/>      
      {/* <Text>Email: {auth.currentUser?.email}</Text> */}
      {/* <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};



export default HomeScreen

