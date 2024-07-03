import React from "react";
import { StyleSheet, Text, View } from "react-native";


function Notifications(props: any)
{
    return(
        <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white'}}>Wohoo!!! No Notifications</Text>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Notifications;