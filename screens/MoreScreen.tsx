import React from "react";
import { StyleSheet, Text, View } from "react-native";


function MoreScreen(props: any)
{
    return(
        <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white'}}>Welcome to Profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default MoreScreen;