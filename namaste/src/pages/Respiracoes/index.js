import React from 'react';

import Header from '../../components/Header';

import {
    Container,
    StyledBox
} from './styles';

function Respiracoes () {
    return (
        <Container>
            <Header nome='Respirações' />
            <StyledBox>
                <h3>Respiracoes</h3>
            </StyledBox>
        </Container>
    );
}

export default Respiracoes;