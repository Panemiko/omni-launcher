import React from 'react'
import { Container, Name, ActionsContainer, PlayButton, PlayButtonIcon } from './style'

export default function InstanceInfo(props: InstanceInfoProps) {
    return (
        <React.Fragment>
            <Container css={{ backgroundImage: `url(${props.banner})` }}>
                <Name>{props.name}</Name>
                <ActionsContainer>
                    <PlayButton><PlayButtonIcon /></PlayButton>
                </ActionsContainer>
            </Container>
        </React.Fragment>
    )
}

export interface InstanceInfoProps {
    name: string
    banner: string
}
