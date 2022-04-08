import React, {useState, useContext} from "react"
import styled from "styled-components"
import { SafeArea } from "./spacer"
import {  TextInput } from "react-native-paper"
import { StyledButton } from "./button"
import { PhotoContext, PhotosContextProvider } from "../services/photos/photos.context"
import { Button } from "react-native-paper"
import { ScrollView } from "react-native"
import { RestaurantCardCover } from "../features/screenstyles"


import { ButtonContainer, DetailTitleContainer, Title } from "../features/screenstyles"
import { Image } from "react-native"


const DetailFields = styled(TextInput)`

color: ${(props) => props.theme.colors.brand.primary}
height: ${(props) => props.theme.sizes[3]}
margin: ${(props) => props.theme.space[3]}
`


export const Submission = ({navigation, route}) => {

 const picture  = route.params;





const {addToPhotos, photoList, setPhotoList} = useContext(PhotoContext)

const [photo, setPhoto] = useState({})

console.log(picture)







photo[Symbol.iterator] = function* () { 

  

    


};




const setPlace = ( value) => {
    setPhoto( {...photo, "place": value})
}

const setName = ( value) => {
    setPhoto({...photo, "people": value } )
}
const setVibe = ( value) => {
    setPhoto({...photo, "vibes" : value} )
}



console.log(photo, "picture")




    return(
        <SafeArea>
            <ScrollView>
            <DetailTitleContainer>
                <Title>Photo</Title>
            </DetailTitleContainer>
        <DetailFields label = "Place"  onChangeText={(text) => {
               setPlace(text)}} />
        <DetailFields label = "People"  onChangeText ={text => {
              setName( text)}}/>
        <DetailFields label = "Vibes"  onChangeText = {text => {
              setVibe( text)} }/>

        <ButtonContainer>

           
        
        <Button onPress = {() => { navigation.navigate("CameraScreen")}} style = {{margin: 5, flex: 1, alignItems: "center"}}
        color = "blue"
        mode = "contained"
        children = "Take Photo"
        
        ></Button>
        <StyledButton title = "photo library"></StyledButton>

        </ButtonContainer>


{picture?
 
        <RestaurantCardCover  source = {{uri:  picture.props}}></RestaurantCardCover>:
        null
}


        <Button onPress = {() => { addToPhotos({...photo, "uri": picture.props}), navigation.navigate("Home")}} style = {{margin: 5, flex: 1, alignItems: "center"}}
        color = "blue"
        mode = "contained"
        children = "Submit"
        
        ></Button>

  <Button onPress = {() => {setPhoto([]), navigation.navigate("Home")}} style = {{margin: 5, flex: 1, alignItems: "center"}}
        color = "blue"
        mode = "contained"
        children = "Cancel"
        
        ></Button>

<Button onPress = {() => {setPhotoList([])}} style = {{margin: 5, flex: 1, alignItems: "center"}}
        color = "blue"
        mode = "contained"
        children =  "Cancel"
        
        ></Button>

           </ScrollView>

        </SafeArea>
    )
}

