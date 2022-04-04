import React, {useRef, useState, useEffect} from "react" ;
import { Camera } from "expo-camera";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MemoryCamera = styled(Camera)`
width: 100%;
height: 100%
`

export const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null)
    const cameraRef = useRef(null)

    const snap = async () => {
        if (cameraRef) {
          const photo = await cameraRef.current.takePictureAsync();
          AsyncStorage.setItem()
          console.log(photo);
        }
      };

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);


    return(
        <TouchableOpacity onPress = {snap}>
        <MemoryCamera ref = {(camera) => {cameraRef.current = camera}}type = {Camera.Constants.Type.back}>

        </MemoryCamera>
        </TouchableOpacity>
    )
}