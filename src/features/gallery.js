import React, {useContext} from "react"
import { Searchbar } from "react-native-paper"
import { StyledCard } from "../components/photocard" 
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { SafeArea } from "../components/spacer"
import { PhotoContext } from "../services/photos/photos.context"



export const GalleryScreen = ({navigation}) => {


    const {photoList} = useContext(PhotoContext);

    console.log(photoList.length)
    return (
        <SafeArea>
   


    <Searchbar  style = {{paddingTop: 10}}iconColor = "blue" placeholder="Search Memories" />
        
        <FlatList
        
        data = {photoList}
        renderItem={() => (<TouchableOpacity onPress={() => navigation.navigate("PhotoDetails")}><StyledCard photo = {photoList[0]}/></TouchableOpacity>)}
        keyExtractor = {(item) => item.name}
        contentContainerStyle = {{padding: 16}}
        />
       
        </SafeArea>
    )
}