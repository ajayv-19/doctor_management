import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';

const Prof = () => {
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
        <View style={styles.container}>
          
          <Text style={styles.emailText}>Email: {auth.currentUser?.email}</Text>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
        </View> 
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f4f4f8', 
      },
      emailText: {
        fontSize: 18,
        fontFamily:'appfont-semi',
        color: '#333', 
        marginBottom: 24, 
        padding: 10, 
        borderRadius: 5, 
        backgroundColor: '#fff', 
        alignSelf: 'stretch', 
        textAlign: 'center', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2, 
      },
      button: {
        backgroundColor: 'blue', 
        paddingVertical: 12, 
        paddingHorizontal: 25, 
        borderRadius: 25, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, 
      },
      buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
      },
    });
    
    
    
    export default Prof
