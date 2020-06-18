import React from 'react';

import Header from '../../components/Header';

import {
    Container,
    StyledBox
} from './styles';

function Videos () {
    return (
        <Container>
            <Header nome='Vídeos' />
            <StyledBox>
                <h3>Dados Externos</h3>
            </StyledBox>
        </Container>
    );
}

export default Videos;