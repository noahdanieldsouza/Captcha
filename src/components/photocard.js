import React from "react"
import { PhotoCard, RestaurantCardCover, Label, LabelContainer } from "../features/screenstyles"
import { Favorite } from "./favorite"





export const StyledCard = ({photo = {}}) => {
    const {
        name= "Untitled",
        Place = ["River", "Maine"],
        People = ["Noah", "Evan"],
        Feeling = ["Happy"]

    } = photo

    
return (
  <>
    <PhotoCard>

        <LabelContainer>
        <Label style = {{padding: 3}}>{name}</Label>
        </LabelContainer>
        <RestaurantCardCover></RestaurantCardCover>
       
     

    </PhotoCard>
    </>
    
)

}