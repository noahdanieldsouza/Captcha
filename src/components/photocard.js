import React from "react"
import { PhotoCard, RestaurantCardCover, Label, LabelContainer } from "../features/screenstyles"
import {View} from "react-native"
import styled from "styled-components"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PictureScreen } from "./pictureScreen"





export const StyledCard = ({photo = {}}) => {
    const {
        name= "Untitled",
        Place = ["River", "Maine"],
        People = ["Noah", "Evan"],
        Feeling = ["Happy"]

    } = photo

    const Stack = createNativeStackNavigator();
return (
    <NavigationContainer independent = {true}>
    <PhotoCard>
        <LabelContainer>
        <Label style = {{padding: 3}}>{name}</Label>
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