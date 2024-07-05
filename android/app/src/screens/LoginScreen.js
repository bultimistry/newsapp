import React, { useState } from "react";

import {View, Text, TextInput, Button, StyleSheet, StatusBar} from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { firebase } from "../../../../firebase";


const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
       try{
            await firebase.auth().signInWithEmailAndPassword(email, password); 
            await AsyncStorage.setItem('userToken', 'abc123'); 
            navigation.replace('Home'); 
       }
       catch(err){
           setError(err.message); 
       }
    }; 

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={StyleSheet.title}>Login</Text>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TextInput 
               style={StyleSheet.input} 
               placeholder="Email" 
               value={email} 
               onChangeText={setEmail} 
               keyboardType="email-address" 
               autoCapitalize="none" 

            />
             <TextInput 
              style={styles.input} 
              placeholder="Password" 
              value={password} 
              onChangeText={setPassword} 
              secureTextEntry
             />
             <Button title="Login" onPress={handleLogin} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'content', 
        alignItems: 'center', 
        padding: 16, 
        backgroundColor: '#fff',
    }, 
    title: {
        fontSize: 24, 
        marginBottom: 16,
    }, 
    input: {
        width: '100%', 
        padding: 8, 
        marginVertical: 8, 
        borderWidth: 1,
        borderColor: '#ccc', 
        borderRadius: 4,
    },
    error: {
        color: 'red', 
        marginBottom: 16, 
    },
});
export default LoginScreen;