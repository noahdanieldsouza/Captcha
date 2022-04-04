import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack"
import { Home } from "../../features/homescreen";
import { Submission } from "../../components/submit";
import { CameraScreen } from "../../features/camera";

const CameraStack = createStackNavigator();
export const HomeNavigation = () => {
    return(
        <CameraStack.Navigator headerMode="none" screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
        
        <CameraStack.Screen
          name="Home"
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