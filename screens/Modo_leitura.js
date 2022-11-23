import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ModoLeitura extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Modo Leitura</Text>
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