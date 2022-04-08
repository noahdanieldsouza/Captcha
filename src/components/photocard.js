import React, {useContext} from "react"
import { PhotoCard, RestaurantCardCover, Label, LabelContainer } from "../features/screenstyles"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PictureScreen } from "./pictureScreen"
import { Image } from "react-native"







export const StyledCard = (photo  = {}) => {
  
 const people = photo.photo.item.people
 const uri = photo.photo.item.uri
 
   



  

    
return (
  
    <PhotoCard>
        <LabelContainer>
        <Label style = {{padding: 3}}>{people}</Label>
        </LabelContainer>

        <RestaurantCardCover key = {uri} source = {{uri: uri}}></RestaurantCardCover>
       
       


    </PhotoCard>
   
)

}