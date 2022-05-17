import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack"
import { GalleryScreen } from "../../features/gallery";
import { PhotoDetailsScreen } from "../../features/photo.details";


const PhotosStack = createStackNavigator();

export const PhotoNavigation = () => {
    return(
        <PhotosStack.Navigator  screenOptions={{...TransitionPresets.ModalPresentationIOS, headerShown: false}}>
        <PhotosStack.Screen
          name="Gallery"
          component={GalleryScreen}
        />
        <PhotosStack.Screen
          name="PhotoDetails"
          component={PhotoDetailsScreen}
        />
      </PhotosStack.Navigator>
    )
}
