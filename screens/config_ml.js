import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ConfigML extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Config ML</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})