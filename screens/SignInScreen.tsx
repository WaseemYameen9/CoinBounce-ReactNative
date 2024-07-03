import React, { useState } from "react";
import {SetUser, ResetUser} from '../redux/action'
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import Buttons from '../components/Buttons';
import SocialMediaButton from "../components/SocialMediaButton";

function SignInScreen(props: any) {

    const dispatch = useDispatch();
    let data = useSelector((state: any)=>state.userData);


    function HandleSignIn()
    {
        const data = {
            _id: 1,
            email: 'wyameen152@gmail.com'
        }
        dispatch(SetUser(data))
        props.navigation.navigate('Home');
    }
    function HandleSignUp()
    {
        props.navigation.navigate('Sign Up');
    }

    return (
        <ScrollView style={styles.body}>
            <View style={styles.SignInTextContainer}>
                <Text style={styles.SignInText}>SIGN IN</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Enter your Phone number for sign in.</Text>
            </View>
            
            
            <View style={styles.inputContainer}>
            <TextInput placeholder="Email" placeholderTextColor={'white'} style={styles.input2} />
            <TextInput placeholder="Password" placeholderTextColor={'white'} style={styles.input2} />
            </View>



            <View style={styles.fpContainer}>
                <Text style={styles.fgPassword}>Forgot Password?</Text>
            </View>


            <Buttons onPress={HandleSignIn} text="SIGN IN" BackColor="#1476D1" Color="white" BorderColor="#1476D1" />
            <Buttons onPress={HandleSignUp} text="SIGN UP" BackColor="#1476D1" Color="white" BorderColor="#1476D1" />
            
            

            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'white', marginTop: 15 }}>Or Continue with</Text>
            </View>
            <View style={styles.container}>
                <SocialMediaButton name="facebook" backcolor={"#3b5998"} />
                <SocialMediaButton name="google" backcolor={"#DB4437"} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>By Signing up you agree to our</Text>
                <Text style={{ color: '#1476D1' }}>Terms Conditions and Privacy Policy</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
        top: 0,
        backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: 15
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '20%'
    },
    SignInTextContainer: {
        marginTop: '30%'
    },
    SignInText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    titleContainer: {
        marginTop: '5%',
    },
    title: {
        color: 'white'
    },
    inputContainer: {
        marginVertical: 15,
    },
    phoneInputContainer: {
        borderWidth: 1,
        borderColor: '#6e856d',
        borderRadius: 10,
        height: 50,
        marginBottom: 10,
        width: '100%'
    },
    input2: {
        borderWidth: 1,
        borderColor: '#6e856d',
        borderRadius: 10,
        height: 50,
        paddingVertical: 0,
        paddingHorizontal: 10,
        marginVertical: 10,
        color: 'white'
    },
    fpContainer: {
        marginVertical: 10,
        alignItems: 'center'
    },
    fgPassword: {
        color: '#1476D1'
    },
    AfterSignInText: {
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default SignInScreen;
