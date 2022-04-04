import React, {useState, useContext} from "react"
import styled from "styled-components"
import { SafeArea } from "./spacer"
import {  TextInput } from "react-native-paper"
import { StyledButton } from "./button"
import { PhotoContext, PhotosContextProvider } from "../services/photos/photos.context"
import { Button } from "react-native-paper"


import { ButtonContainer, DetailTitleContainer, Title } from "../features/screenstyles"


const DetailFields = styled(TextInput)`

color: ${(props) => props.theme.colors.brand.primary}
height: ${(props) => props.theme.sizes[3]}
margin: ${(props) => props.theme.space[3]}
`


export const Submission = ({navigation}) => {



const {addToPhotos, photoList, setPhotoList} = useContext(PhotoContext)

const [photo, setPhoto] = useState({})



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

console.log(photo, "primary")
console.log(photoList[photoList.length - 1])

    return(
        <SafeArea>
            <DetailTitleContainer>
                <Title>Photo</Title>
            </DetailTitleContainer>
        <DetailFields label = "Place"  onChangeText={text => {
              setPlace(text)}} />
        <DetailFields label = "People"  onChangeText ={text => {
              setName( text)}}/>
        <DetailFields label = "Vibes"  onChangeText = {text => {
              setVibe( text)}}/>

        <ButtonContainer>

        
        <Button onPress = {() => { navigation.navigate("CameraScreen")}} style = {{margin: 5, flex: 1, alignItems: "center"}}
        color = "blue"
        mode = "contained"
        children = "Take Photo"
        
        ></Button>
        <StyledButton title = "photo library"></StyledButton>

        </ButtonContainer>


        <Button onPress = {() => {addToPhotos(photo), navigation.navigate("Home")}} style = {{margin: 5, flex: 1, alignItems: "center"}}
        color = "blue"
        mode = "contained"
        children = "Submit"
        
        ></Button>

  <Button onPress = {() => {setPhoto([]), navigation.navigate("Home")}} style = {{margin: 5, flex: 1, alignItems: "center"}}
        color = "blue"
        mode = "contained"
        children = "Cancel"
        
        ></Button>

           

        </SafeArea>
    )
}

