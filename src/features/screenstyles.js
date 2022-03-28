
import {Text, View, } from "react-native"
import styled from "styled-components"
import { Card } from "react-native-paper"






export const TitleContainer = styled(View)`
padding: ${(props) => props.theme.space[3]};
align-items: center
`
export const Title = styled(Text)`
font-size: ${(props) => props.theme.fontSizes.h5};
color: ${(props) => props.theme.colors.ui.tertiary};
font-family: ${(props) => props.theme.fonts.heading}
`
export const ButtonContainer = styled(View) `
padding: ${(props) => props.theme.space[3]};
align-items: center;
flex-direction: row;

`

export const PhotoCard = styled(Card) `
padding: ${(props) => props.theme.space[3]}
margin: ${(props) => props.theme.space[3]}
background-color: ${(props) => props.theme.colors.brand.primary}

`

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]}
 
  
  
`;

export const LabelContainer = styled(View) `
align-items: center
`
export const Label = styled(Text) `
font-size: ${(props) => props.theme.fontSizes.body};
margin-bottom:    ${(props) => props.theme.space[3]};
font-family: ${(props) => props.theme.fonts.heading}


`
