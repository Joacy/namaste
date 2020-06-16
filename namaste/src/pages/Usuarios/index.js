import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

function Usuarios () {
    return (
        <Container>
            <Header nome='Usuários' />
            <h3>Usuarios</h3>
        </Container>
    );
}

export default Usuarios;