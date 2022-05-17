
import {Text, View, } from "react-native"
import styled from "styled-components"
import { Card } from "react-native-paper"






export const TitleContainer = styled(View)`
padding: ${(props) => props.theme.space[3]};
align-items: center
margin-top: ${(props) => props.theme.space[6]}
`
export const DetailTitleContainer = styled(View)`
padding: ${(props) => props.theme.space[3]};
align-items: center

`
export const Title = styled(Text)`
font-size: ${(props) => props.theme.fontSizes.h5};
color: ${(props) => props.theme.colors.ui.tertiary};
font-family: ${(props) => props.theme.fonts.body}
`
export const ButtonContainer = styled(View) `
padding: ${(props) => props.theme.space[3]};
align-items: center;
flex:0.5





`
export const ButtonContainer1 = styled(View) `
padding: ${(props) => props.theme.space[1]};
align-items: center;
flex-direction: column;
flex: 1

`

export const PhotoCard = styled(Card) `
padding: ${(props) => props.theme.space[1]}
margin: ${(props) => props.theme.space[2]}



`

export const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[0]} 
`;

export const LabelContainer = styled(View) `
align-items: center
`
export const Label = styled(Text) `
font-size: ${(props) => props.theme.fontSizes.body};
margin-top:    ${(props) => props.theme.space[1]};
font-family: ${(props) => props.theme.fonts.heading};
color: ${(props) => props.theme.colors.text.primary}


`
export  const ButtonText = styled(Text)`
font-family: ${(props) => props.theme.fonts.body}
`
