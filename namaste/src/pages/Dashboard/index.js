import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

function Dashboard () {
    return (
        <Container>
            <Header nome='Dashboard' />
            <h3>Dashboard</h3>
        </Container>
    );
}

export default Dashboard;