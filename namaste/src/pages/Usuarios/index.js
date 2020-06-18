import React from 'react';

import Header from '../../components/Header';

import {
    Container,
    StyledBox
} from './styles';

function Usuarios () {
    return (
        <Container>
            <Header nome='Usuários' />
            <StyledBox>
                <h3>Usuarios</h3>
            </StyledBox>
        </Container>
    );
}

export default Usuarios;