import React from 'react';

import Header from '../../components/Header';

import {
    Container,
    StyledBox
} from './styles';

function DadosExternos () {
    return (
        <Container>
            <Header nome='Dados Externos' />
            <StyledBox>
                <h3>Dados Externos</h3>
            </StyledBox>
        </Container>
    );
}

export default DadosExternos;