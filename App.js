import React from "react"
import { SafeArea } from "./src/components/spacer"
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infastructure/styles";
import {useFonts as useOswald, Oswald_400Regular}from "@expo-google-fonts/oswald"
import {useFonts as useLato, Lato_400Regular}from "@expo-google-fonts/lato"
import {useFonts as useRoboto, Roboto_400Regular}from "@expo-google-fonts/roboto"
import { Navigation } from "./src/infastructure/navigation"
import { PhotosContextProvider } from "./src/services/photos/photos.context";







export default function App ()  {




const oswaldLoaded = useOswald({
    Oswald_400Regular,
});

const latoLoaded = useLato({
    Lato_400Regular,
});

const robotoLoaded = useRoboto({
    Roboto_400Regular,
 });

if(!oswaldLoaded || !latoLoaded || !robotoLoaded){
  return null
 }


 
  return (
  <PhotosContextProvider>
    <ThemeProvider theme = {theme}>
    <SafeArea>
    <Navigation/>
      
    </SafeArea>
    </ThemeProvider>

  </PhotosContextProvider>
   
  )
}