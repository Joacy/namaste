import React from 'react';

import Header from '../../components/Header';

import {
    Container,
    StyledBox
} from './styles';

function Musicas () {
    return (
        <Container>
            <Header nome='Músicas' />
            <StyledBox>
                <h3>Musicas</h3>
            </StyledBox>
        </Container>
    );
}

export default Musicas;