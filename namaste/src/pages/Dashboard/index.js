import React from 'react';

import Header from '../../components/Header';
import CardDashboard from '../../components/CardDashboard';

import {
    Grid,
} from '@material-ui/core';

import {
    Container,
    StyledBox
} from './styles';

function Dashboard () {
    return (
        <Container>
            <Header nome='Dashboard' />
            <StyledBox>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={12}
                        md={5}
                    >
                        <CardDashboard title="Meditações Hoje" icone="" qtd="100" />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={5}
                    >
                        <CardDashboard title="Usuários Online Atualmente" icone="" qtd="24" />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={5}
                    >
                        <CardDashboard title="Usuários Totais" icone="" qtd="1254" />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={5}
                    >
                        <CardDashboard title="Usuários Premiums Ativos" icone="" qtd="220" />
                    </Grid>
                </Grid>
            </StyledBox>
        </Container>
    );
}

export default Dashboard;