import React, {useContext} from "react"
import { PhotoCard, RestaurantCardCover, Label, LabelContainer } from "../features/screenstyles"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PictureScreen } from "./pictureScreen"







export const StyledCard = (photo  = {}) => {
   
 const people = photo.photo.item.people
 const place = photo.photo.item.place
 const vibes = photo.photo.item.vibes

   console.log(photo.photo.item.people, "yep")



  

    const Stack = createNativeStackNavigator();
return (
    <NavigationContainer independent = {true}>
    <PhotoCard>
        <LabelContainer>
        <Label style = {{padding: 3}}>{people}</Label>
        </LabelContainer>
        <RestaurantCardCover></RestaurantCardCover>
       
      <Stack.Navigator>
        <Stack.Screen
          name="Picture"
          component={PictureScreen}
          options={{ title: 'Welcome' }}
        />
       
      </Stack.Navigator>

    </PhotoCard>
    </NavigationContainer>
)

}