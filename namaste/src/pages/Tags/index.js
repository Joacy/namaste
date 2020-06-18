import React from 'react';

import Header from '../../components/Header';

import {
    Container,
    StyledBox
} from './styles';

function Tags () {
    return (
        <Container>
            <Header nome='Tags' />
            <StyledBox>
                <h3>Tags</h3>
            </StyledBox>
        </Container>
    );
}

export default Tags;