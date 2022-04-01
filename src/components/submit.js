import React, {useState, useContext} from "react"
import styled from "styled-components"
import { SafeArea } from "./spacer"
import {  TextInput } from "react-native-paper"
import { StyledButton } from "./button"
import { PhotoContext } from "../services/photos/photos.context"
import { Button } from "react-native-paper"


import { ButtonContainer, TitleContainer, Title } from "../features/screenstyles"

const DetailFields = styled(TextInput)`

color: ${(props) => props.theme.colors.brand.primary}
height: ${(props) => props.theme.sizes[3]}
margin: ${(props) => props.theme.space[3]}
`



export const Submission = () => {

const {addToPhotos,  photoList} = useContext(PhotoContext)

const [photo, setPhoto] = useState([])

console.log(photo, "primary")
console.log(photoList, "final")
    return(
        <SafeArea>
            <TitleContainer>
                <Title>Photo</Title>
            </TitleContainer>
        <DetailFields label = "Place"  onSubmitEditing={({ nativeEvent }) => {
              setPhoto([...photo, nativeEvent.text])}} />
        <DetailFields label = "People"  onSubmitEditing={({ nativeEvent }) => {
              setPhoto([...photo, nativeEvent.text])}}/>
        <DetailFields label = "Vibes"  onSubmitEditing={({ nativeEvent }) => {
              setPhoto([...photo, nativeEvent.text])}}/>

        <ButtonContainer>

        <StyledButton title = "take photo"></StyledButton>
        <StyledButton title = "photo library"></StyledButton>

        </ButtonContainer>
        <Button onPress = {() => {addToPhotos(photo)}} style = {{margin: 5, flex: 1}}
        color = "blue"
        mode = "contained"
        children = "Upload a Memory"
        ></Button>
           

        </SafeArea>
    )
}

