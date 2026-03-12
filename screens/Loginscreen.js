import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Image } from 'react-native';
//import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    //   const navigation = useNavigation();

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setKeyboardVisible(false)
        );

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.replace("Main");
            }
        });

        // Clean up function
        return () => {
            unsubscribe();
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    // useEffect(() => {
    //     // You do not need to pass the `auth` instance to `onAuthStateChanged` here
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             navigation.replace("Main");
    //         }
    //     });

    //     return unsubscribe;
    // }, []);

    const handleSignUp = () => {
        // You do not need to pass the `auth` instance to `createUserWithEmailAndPassword`
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error => alert(error.message));
    }

    const handleLogin = () => {
        // You do not need to pass the `auth` instance to `signInWithEmailAndPassword`
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message));
    }

    return (
        <View
            style={styles.container}
            behavior="padding"
        >
            {!isKeyboardVisible && (
                <>
                    <Text style={styles.appName}></Text>

                    <Image source={require('../assets/lsp.png')} style={styles.logo} />
                </>
            )}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // A light background color #f4f4f8
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 0,
    },
    appName: {
        fontSize: 32,
        fontFamily: 'appfont-bold',
        
        color: '#34a853', // A color that is often associated with healthcare
        marginBottom: 20, // Gives some space between the app name and the content below
        textAlign: 'center', // Centers the app name if it's on a new line
    },
    logo: {
        width: 320,
        height: 430,
       // marginBottom: 30,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#dedede', // A subtle border color
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#34a853', // A calming green color
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 10,
        borderColor: '#34a853',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#34a853',
        fontWeight: '700',
        fontSize: 16,
    },
});

