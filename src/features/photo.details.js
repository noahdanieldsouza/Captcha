import React from "react"
import { Text, View, ScrollView} from "react-native"
import { SafeArea } from "../components/spacer"
import { RestaurantCardCover } from "./screenstyles"
import styled from "styled-components"

const Title = styled(Text) `
color: blue
fontSize: ${(props) => props.theme.sizes[3]}

`
const TitleContainer = styled(View)`
padding: ${(props) => props.theme.space[1]};
align-items: center
`
 const emptyLabel = styled(Text)`
 color:${(props) => props.theme.colors.text.primary}
 `
const SubTitleContainer = styled(View)`
flex-direction: row
padding: ${(props) => props.theme.space[0]}
margin-left: ${(props) => props.theme.space[2]}
margin-bottom: ${(props) => props.theme.space[2]}

align-items: center

`
const SubTitle = styled(Text)`
fontSize: ${(props) => props.theme.sizes[3]}
color:${(props) => props.theme.colors.text.violet}
font-family: ${(props) => props.theme.fonts.body};
margin-left: ${(props) => props.theme.space[4]}

`
const LabelContainer = styled(View)`

align-items: center
`

const Label = styled(Text)`
fontSize: ${(props) => props.theme.sizes[2]}
padding: ${(props) => props.theme.space[2]}
paddingTop: ${(props) => props.theme.space[2]}
margin-left: ${(props) => props.theme.space[5]}
font-family: ${(props) => props.theme.fonts.text};
`
const TextContainer = styled(View) `
padding: ${(props) => props.theme.space[3]}

`
const PhotoDetailImage = styled(RestaurantCardCover)`
height: 500
`
export const PhotoDetailsScreen = ({route}) => {

    const {photo} = route.params;
   
console.log(photo, "details")

const people = photo.item.people
const place= photo.item.place
const vibes = photo.item.vibes
const url = photo.item.uri

 



    return (
        <SafeArea>
            <ScrollView >

            <TitleContainer>
            <Title>Photo Details</Title>
            </TitleContainer>

           
        <TextContainer>
            <SubTitleContainer>
                <SubTitle>People:</SubTitle>
                <LabelContainer>
            <Label style = {{marginLeft: 42}}>{people}</Label>
            </LabelContainer>
            </SubTitleContainer>
            <SubTitleContainer>
                <SubTitle>Place:</SubTitle>
                <LabelContainer>
                <Label>{place } </Label>
                </LabelContainer>
            </SubTitleContainer>
           <SubTitleContainer>
               <SubTitle>Vibes:</SubTitle>
               <LabelContainer>
               <Label>{vibes}</Label>
               </LabelContainer>
           </SubTitleContainer>

           <PhotoDetailImage  key = {url} source = {{uri: url}}></PhotoDetailImage>

         
            
         </TextContainer>

         
            </ScrollView>
        </SafeArea>
    )
}