import React, {useContext} from "react"
import {  ButtonContainer, TitleContainer, Title } from "./screenstyles"
import { View} from "react-native"
import styled from "styled-components"
import { Button } from "react-native-paper"
import { PhotoContext } from "../services/photos/photos.context"
const Option = styled(Button) `
height: 30px;
width: 200px;
align-items: center
`
const Spacer = styled(View)`
marginTop: 100
`



export const Home = ({navigation}) => {

const {setPhotoList} = useContext(PhotoContext)

    return(
 <> 
    <TitleContainer> 
        <Title> Make Some Memories</Title>
    </TitleContainer>
        <Spacer/>

   <ButtonContainer>
       
        <Option onPress = {() => {navigation.navigate("SubmissionScreen")}} style = {{margin: 5, flex: 1}}
            color = "blue"
            mode = "contained"
            compact =" true"
            children = "Upload a Memory"
            contentStyle = {{flex: 1}}
        ></Option>      

        <Option onPress = {() => {setPhotoList([])}} style = {{margin: 5, flex: 1, alignItems: "center"}}
            color = "blue"
            mode = "contained"
            children =  "Clear Memories"
            compact =" true"
            contentStyle ={{flex: 1}}
        ></Option>

    </ButtonContainer>
    
 
</>
    
   
    )
}