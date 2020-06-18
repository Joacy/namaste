import React from 'react';

import { Container } from './styles';

function CardDashboard (props) {
    return (
        <Container>
            <h5>{props.title}</h5>
            <h3>{props.qtd}</h3>
        </Container>
    );
}

export default CardDashboard;