import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import Buttons from '../components/Buttons'

function Bookings(props: any)
{
    return(
        <ScrollView style={styles.body}>
        <View style={[styles.titleContainer,{marginTop: 80}]}>
            <Text style={styles.title}>Enter title of you Post.</Text>
        </View>
        
        
        <View style={styles.inputContainer}>
        <TextInput placeholder="Title" placeholderTextColor={'white'} style={styles.input2} />
        </View>
        
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Enter description of your Post.</Text>
        </View>
        
        <View style={[styles.inputContainer]}>
        <TextInput multiline numberOfLines={10} placeholder="Description" placeholderTextColor={'white'} style={[styles.input2,{height: 250, justifyContent: 'flex-start', textAlignVertical:'top'}]} />
        </View>

        <Buttons text="POST" BackColor="#1476D1" Color="white" BorderColor="#1476D1" />
        
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

    titleContainer: {
        marginTop: '5%',
    },
    title: {
        color: 'white'
    },
    inputContainer: {
        marginVertical: 3,
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

})

export default Bookings;