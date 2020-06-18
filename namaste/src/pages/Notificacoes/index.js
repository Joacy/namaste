import React from 'react';

import Header from '../../components/Header';

import {
    Container,
    StyledBox
} from './styles';

function Notificacoes () {
    return (
        <Container>
            <Header nome='Notificações' />
            <StyledBox>
                <h3>Notificacoes</h3>
            </StyledBox>
        </Container>
    );
}

export default Notificacoes;