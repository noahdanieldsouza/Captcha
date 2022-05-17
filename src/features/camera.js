import React, {useRef, useState, useEffect} from "react" ;
import { Button } from "react-native-paper";
import { Camera } from "expo-camera";
import styled from "styled-components";
import { TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MemoryCamera = styled(Camera)`
width: 100%;
height: 100%
`

const Option = styled(Button) `
height: 30px;
width: 200px;
color: blue

`

const Box = styled(View)`
align-items: center
margin-top: 500px
`

export const CameraScreen = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null)
    const cameraRef = useRef(null)

    const snap = async () => {
      console.log("yo")
        if (cameraRef) {
          const photo = await cameraRef.current.takePictureAsync();
          AsyncStorage.setItem()
          navigation.navigate(
           'SubmissionScreen',
            { props: photo.uri },
           
          );

       
        }
      };

    

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
          
        })();
      }, []);


    return(
       
<>


         
         
        <MemoryCamera ref = {(camera) => {cameraRef.current = camera}}type = {Camera.Constants.Type.back}>
         <Box>
      <Option onPress={snap} children = "snap" mode = "contained" />
      </Box>
    
      
        </MemoryCamera>


        </>

       
       
       
       
    )
}