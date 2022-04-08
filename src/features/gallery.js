import React, {useContext, useState} from "react"
import { Searchbar } from "react-native-paper"
import { StyledCard } from "../components/photocard" 
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { SafeArea } from "../components/spacer"
import { PhotoContext } from "../services/photos/photos.context"



export const GalleryScreen = ({navigation}) => {


    const [searchfield, setSearchField] = useState("")
    const {photoList} = useContext(PhotoContext);

    
   

   const filteredPhotos = photoList.filter((photo ={}) =>{
       if (searchfield =="")
        return photoList

        else if (photo.people.toLowerCase().includes(searchfield.toLowerCase())){

            return (photo.people.toLowerCase().includes(searchfield.toLowerCase()) )
        }

        else if (photo.place.toLowerCase().includes(searchfield.toLowerCase())){

            return (photo.place.toLowerCase().includes(searchfield.toLowerCase()) )
        }

        else if (photo.vibes.toLowerCase().includes(searchfield.toLowerCase())){

            return (photo.vibes.toLowerCase().includes(searchfield.toLowerCase()) )
        }



        

        
        
  
        }  
   
      
  )

    
   console.log(photoList[0].people.toLowerCase(), "gallery")
    
    return (
        <SafeArea>
   


    <Searchbar onChange={({nativeEvent}) => {setSearchField(nativeEvent.text)}} style = {{paddingTop: 10}}iconColor = "blue" placeholder="Search Memories" />

     
        
        <FlatList
        
        data = {filteredPhotos}
        renderItem={(item) => (<TouchableOpacity onPress={() => navigation.navigate("PhotoDetails", {photo : item})}><StyledCard photo= {item}/></TouchableOpacity>)}
        keyExtractor = {(item) => item.name}
        contentContainerStyle = {{padding: 16}}
        />
       
       
        </SafeArea>
    )
}