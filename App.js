import React from "react"
import { SafeArea } from "./src/components/spacer"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons"
import { Home } from "./src/features/homescreen";
import { Favorites } from "./src/features/favorites";
import { GalleryScreen } from "./src/features/gallery";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infastructure";
import {useFonts as useOswald, Oswald_400Regular}from "@expo-google-fonts/oswald"
import {useFonts as useLato, Lato_400Regular}from "@expo-google-fonts/lato"
import {useFonts as useRoboto, Roboto_400Regular}from "@expo-google-fonts/roboto"
import { Navigation } from "./src/infastructure/navigation";





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


 const Tab = createBottomTabNavigator();

  
const TAB_ICON = {
  Home: "md-camera",
  Favorites: "md-heart",
  Memories: "md-albums",
};

  

   

   const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({size, color}) => (
       <>
       <Ionicons name={iconName} size={size} color={color} />
       </>
      )
      
    }
  }
  
  return (
    <>
    <ThemeProvider theme = {theme}>
    <SafeArea>
    <Navigation/>
      
    </SafeArea>
    </ThemeProvider>
    </>
  )
}