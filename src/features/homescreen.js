import React from "react"
import { ButtonContainer, TitleContainer, Title } from "./screenstyles"
import { View} from "react-native"
import { Button } from "react-native-paper"




export const Home = ({navigation}) => {


   


    return(
     <> 
    <TitleContainer> 
        <Title> Make some Memories</Title>
    </TitleContainer>
    <View style = {{marginTop: 100}}/>
 <ButtonContainer>
    
 <Button onPress = {() => {navigation.navigate("SubmissionScreen")}} style = {{margin: 5, flex: 1}}
        color = "blue"
        mode = "contained"
        children = "Upload a Memory"
        ></Button>
    

    
    </ButtonContainer>
</>
    
   
    )
}