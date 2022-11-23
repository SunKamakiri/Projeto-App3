import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import {Star, ShareNetwork} from "phosphor-react"

export default class MetasCard extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style={styles.title}>Metas</Text>
                <View style={styles.metasContainer}>
                         <View style={styles.metasItem}>
                               <Star size={25} weight="fill" color="gold"/>
                               <Text style={styles.metasItemTitle}>Meta 1</Text>
                               <ShareNetwork size={25} weight="fill" />
                         </View>
                         <View style={styles.metasItem}>
                               <Star size={25} weight="fill" color="gold" />
                               <Text style={styles.metasItemTitle}>Meta 2</Text>
                               <ShareNetwork size={25} weight="fill" />
                         </View>
                         <View style={styles.metasItem}>
                               <Star size={25} weight="fill" color="grey"/>
                               <Text style={styles.metasItemTitle}>Meta 3</Text>
                               <ShareNetwork size={25} weight="fill" />
                         </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C9BF",
        borderRadius: 50
    },
    title:{
     fontSize: 25,
     fontWeight: "bold",
     marginBottom: 30
    },
    metasItem:{
     marginBottom: 30,
     flexDirection: "row"
    },
    metasItemTitle: {
        marginLeft: 15,
        marginRight: 15
    }
})