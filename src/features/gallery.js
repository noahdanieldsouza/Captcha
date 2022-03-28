import React from "react"
import { Searchbar } from "react-native-paper"
import { StyledCard } from "../components/photocard" 
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { SafeArea } from "../components/spacer"



export const GalleryScreen = ({navigation}) => {

    const Click = () => {
        console.log("Clicked")
    }
    return (
        <SafeArea>
   


    <Searchbar  style = {{paddingTop: 10}}iconColor = "blue" placeholder="Search Memories" />
        
        <FlatList
        
        data = {[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}, {name: 7}, {name: 8}]}
        renderItem={() => (<TouchableOpacity onPress={() => navigation.navigate("PhotoDetails")}><StyledCard /></TouchableOpacity>)}
        keyExtractor = {(item) => item.name}
        contentContainerStyle = {{padding: 16}}
        />
       
        </SafeArea>
    )
}