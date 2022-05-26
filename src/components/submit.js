import React, {useState, useContext} from "react"
import styled from "styled-components"
import { SafeArea } from "./spacer"
import {  TextInput } from "react-native-paper"
import { PhotoContext } from "../services/photos/photos.context"
import { Button } from "react-native-paper"
import { ScrollView, View,  } from "react-native"
import { RestaurantCardCover } from "../features/screenstyles"
import { TouchableOpacity } from "react-native"

import { ButtonContainer, DetailTitleContainer, Title } from "../features/screenstyles"



const DetailFields = styled(TextInput)`

color: ${(props) => props.theme.colors.brand.primary}
height: ${(props) => props.theme.sizes[3]}
margin: ${(props) => props.theme.space[3]}
`

const ImagePreview = styled(RestaurantCardCover) `
height: 300
`
const FormControl = styled(View)`
padding: 20px
marginTop: 20

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

const addPhoto = () => {
    if (picture){
        addToPhotos({...photo, "uri": picture.props } )
    }
        addToPhotos({...photo} )
    }





console.log(photo, "picture")




    return (
        <SafeArea>
            <ScrollView>
            <DetailTitleContainer>
                <Title>Photo</Title>
            </DetailTitleContainer>
        <DetailFields label = "Place"  onChangeText={(text) => {
               setPlace(text)}} />
        <DetailFields label = "People"  onChangeText ={text => {
              setName( text)}}/>
        <DetailFields  label = "Vibes"  onChangeText = {text => {
              setVibe( text)} }/>


{picture ?
 
 <ImagePreview  source = {{uri:  picture.props}}></ImagePreview>:
 null
}

        <ButtonContainer>

           
        
        <Button onPress = {() => { navigation.navigate("CameraScreen")}} style = {{margin: 5, flex: 1, alignItems: "center"}}
        color = "blue"
        mode = "contained"
        children = "Take Photo"
        
        ></Button> 
        
        

        </ButtonContainer>



<FormControl >
<TouchableOpacity>
        <Button onPress = {() => { addPhoto()  , navigation.navigate("Camera")}} style = {{margin: 3, flex:0.5, alignItems: "center"}}
        color = "blue"
        mode = "contained"
        children = "Submit"
        
        ></Button>
</TouchableOpacity>


  <Button onPress = {() => { setPhoto([]), navigation.navigate("Camera")}} style = {{margin: 5, flex:0.5, alignItems: "center"}}
        color = "blue"
        mode = "contained"
        children = "Cancel"
        
        ></Button>

</FormControl>


           </ScrollView>

        </SafeArea>
    )
}

