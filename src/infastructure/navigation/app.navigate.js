import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeNavigation } from "./camera.navigate";
import { PhotoNavigation } from "./photos.navigate";
import { Favorites } from "../../features/favorites";





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
  

  export const AppNavigator = () => {
return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={createScreenOptions}
          tabBarOptions = {{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}>

        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen options= {{headerShown: false}}name="Memories" component={PhotoNavigation} />
        <Tab.Screen name = "Favorites" component = {Favorites}/>
      </Tab.Navigator>
    </NavigationContainer>
)
  }