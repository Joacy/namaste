import React from 'react';

import Header from '../../components/Header';

import {
    Container,
    StyledBox
} from './styles';

function Administradores () {
    return (
        <Container>
            <Header nome='Administradores' />
            <StyledBox>
                <h3>Administradores</h3>
            </StyledBox>
        </Container>
    );
}

export default Administradores;