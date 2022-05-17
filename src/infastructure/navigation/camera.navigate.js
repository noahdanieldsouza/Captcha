import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack"
import { Home } from "../../features/homescreen";
import { Submission } from "../../components/submit";
import { CameraScreen } from "../../features/camera";

const CameraStack = createStackNavigator();
export const HomeNavigation = () => {
    return(
        <CameraStack.Navigator  screenOptions={{...TransitionPresets.ModalPresentationIOS, headerShown : false}}>
        
        <CameraStack.Screen
          name="Camera"
          component={Home}
        />
        <CameraStack.Screen
          name="SubmissionScreen"
          component={Submission}
        />

        <CameraStack.Screen
          name="CameraScreen"
          component={CameraScreen}
        />
       
      </CameraStack.Navigator>
    )
}