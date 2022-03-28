import React from "react"
import styled from "styled-components"
import { SafeArea } from "./spacer"
import {  TextInput } from "react-native-paper"
import { StyledButton } from "./button"


import { ButtonContainer, TitleContainer, Title } from "../features/screenstyles"

const DetailFields = styled(TextInput)`

color: ${(props) => props.theme.colors.brand.primary}
height: ${(props) => props.theme.sizes[3]}
margin: ${(props) => props.theme.space[3]}
`

export const Submission = () => {
    return(
        <SafeArea>
            <TitleContainer>
                <Title>Photo</Title>
            </TitleContainer>
        <DetailFields label = "Place"/>
        <DetailFields label = "People"/>
        <DetailFields label = "Vibes"/>

        <ButtonContainer>

        <StyledButton title = "take photo"></StyledButton>
        <StyledButton title = "photo library"></StyledButton>

        </ButtonContainer>

        </SafeArea>
    )
}

