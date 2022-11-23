import React, {Component} from "react";
import { StyleSheet, Text, View, Image, Flatlist } from "react-native";
import MetasCard from "../Components/MetasCard";
import BookCard from "../Components/bookCard";
let books = require("../temp-books.json");


export default class Home extends Component{



    renderItem = ({item: books}) => {
        return(<BookCard/>)
    }
    keyExtractor = (item, index) => {
        index.toString()
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Image source = {require("../assets/Minky_icon.jpg")} style = {styles.profileImage}></Image>
                    <View style = {styles.headerContainer}>
                        <Text>Olá, seja bem vindo</Text>
                        <Text style = {styles.headerName}>Alanna</Text>
                    </View>
                </View>
                <View style = {styles.metasContainer}>
                    <MetasCard/>
                </View>
                <View style = {styles.gallery}>
                    <Flatlist 
                    keyExtractor = {(index)=> {index.toString()}} 
                    data = {books}
                    renderItem = {this.renderItem}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //justifyContent: "center",
        alignItems: "center"
    },
    header: {
        justifyContent: "flex-start", 
        flexDirection: "row",
        marginBottom: 30,
        marginTop: 20
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: "100%",
        marginRight: 10
    },
    metasContainer: {
        backgrounColor: "red",
        width: "80%"
    },
    gallery: {

    },
    headerName: {
        fontSize: 20,
        fontWeight: "bold"
    }
})