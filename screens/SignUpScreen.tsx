import React,{useRef, useState} from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import Buttons from '../components/Buttons'
import SocialMediaButton from "../components/SocialMediaButton";

function SignUpScreen(props: any)
{
    return(
        <ScrollView style={styles.body}>
            <View style={styles.SignInTextContainer}>
                <Text style={styles.SignInText}>Create Account</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Enter your Name, Email, Phone no and Password to sign up. Enjoy</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Full name" placeholderTextColor={'white'} style={styles.input}></TextInput>
                <TextInput placeholder="Email address" placeholderTextColor={'white'} style={styles.input}></TextInput>
                <TextInput placeholder="Password" placeholderTextColor={'white'} style={styles.input}></TextInput>
                <TextInput placeholder="Confirm Password" placeholderTextColor={'white'} style={styles.input}></TextInput>
            </View>
                
            <Buttons text="SIGN UP" BackColor="#1476D1" Color="white" BorderColor="#1476D1"/>


        </ScrollView>

    );
}

const styles = StyleSheet.create({
    body:{
        margin: 0,
        padding:0,
        flex: 1,
        backgroundColor:'black',
        paddingHorizontal: 15
    },
      SignInTextContainer:{
        marginTop: '30%'
      },
      SignInText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
      },
      titleContainer:{
        marginTop: '5%',
      },
      title:{
        color: 'white'
      },
      inputContainer: {
        marginVertical: 15,
    },
      input:{
        borderWidth: 1,
        borderColor: '#6e856d',
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 15,
        color: 'white'
      },

})

export default SignUpScreen;