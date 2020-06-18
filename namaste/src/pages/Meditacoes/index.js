import React from 'react';

import Header from '../../components/Header';

import {
    Container,
    StyledBox
} from './styles';

function Meditacoes () {
    return (
        <Container>
            <Header nome='Meditações' />
            <StyledBox>
                <h3>Meditacoes</h3>
            </StyledBox>
        </Container>
    );
}

export default Meditacoes;