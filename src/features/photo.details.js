import React from "react"
import { Text, View} from "react-native"
import { SafeArea } from "../components/spacer"
import styled from "styled-components"

const Title = styled(Text) `
color: blue
fontSize: ${(props) => props.theme.sizes[2]}

`
const TitleContainer = styled(View)`
padding: ${(props) => props.theme.space[5]};
align-items: center
`
const SubTitleContainer = styled(View)`
flex-direction: row
padding: ${(props) => props.theme.space[3]}
margin-left: ${(props) => props.theme.space[2]}

`
const SubTitle = styled(Text)`
fontSize: ${(props) => props.theme.sizes[2]}
color: violet
`
const Label = styled(Text)`
fontSize: ${(props) => props.theme.sizes[1]}
padding: ${(props) => props.theme.space[3]}
margin-left: ${(props) => props.theme.space[2]}
`
const TextContainer = styled(View) `
padding: ${(props) => props.theme.space[3]}
flex: 1
`
export const PhotoDetailsScreen = ({route}) => {

    const {photo} = route.params;

    console.log(photo, "details")

const people = photo.item.people
const place= photo.item.place
const vibes = photo.item.vibes

 



    return (
        <SafeArea>
            <TitleContainer>
            <Title>Photo Details</Title>
            </TitleContainer>
        <TextContainer>
            <SubTitleContainer>
                <SubTitle>People:</SubTitle>
            <Label>{people}</Label>
            </SubTitleContainer>
            <SubTitleContainer>
                <SubTitle>Place</SubTitle>
                <Label>{place}</Label>
            </SubTitleContainer>
           <SubTitleContainer>
               <SubTitle>Vibes</SubTitle>
               <Label>{vibes}</Label>
           </SubTitleContainer>
            
         </TextContainer>
            
        </SafeArea>
    )
}