import React from "react"

import { PhotoCard, RestaurantCardCover} from "../features/screenstyles"








export const StyledCard = (photo  = {}) => {
  
 const uri = photo.photo.item.uri
 
   



  

    
return (
  
    <PhotoCard>
       
        <RestaurantCardCover  key  = {uri} source = {{uri: uri}}></RestaurantCardCover>

        
       
       


    </PhotoCard>
   
)

}