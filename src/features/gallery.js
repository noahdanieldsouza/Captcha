import React, {useContext, useState} from "react"
import { Searchbar } from "react-native-paper"
import { StyledCard } from "../components/photocard" 
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { SafeArea } from "../components/spacer"
import { PhotoContext } from "../services/photos/photos.context"



export const GalleryScreen = ({navigation}) => {


    const [searchfield, setSearchField] = useState("")
    const {photoList} = useContext(PhotoContext);

    console.log(searchfield)

   

   const filteredPhotos = photoList.filter(photo  =>{
       if (searchfield =="")
        return photoList

        else if (photo.people.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())){

            return (photo.people.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) )
        }

        else if (photo.place.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())){

            return (photo.place.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) )
        }

        else if (photo.vibes.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())){

            return (photo.vibes.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) )
        }



        

        
        
  // return ( 
 //  photo.place.text.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()), 
 //  photo.vibes.text.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()),
   //photo.people.text.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) 
  // )
        }  
   
      
  )

    
   
    
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