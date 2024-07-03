import { Text, TouchableOpacity, StyleSheet } from "react-native"
import React from 'react';

const Buttons = (props: any) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.button,{backgroundColor: props.BackColor, borderColor: props.BorderColor}]}><Text style={{color: props.Color}}>{props.text}</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        borderWidth: 1,
        margin: '2%',
        height: '6%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2%',
        elevation: 3,
        shadowColor: 'black'
      },
})

export default Buttons;