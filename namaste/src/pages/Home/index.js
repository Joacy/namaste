import React from 'react';
import PropTypes from 'prop-types';

import {
    Title,
    StyledTabs,
    StyledTab,
    Container,
} from './styles';

import {
    Grid
} from '@material-ui/core';

import Dashboard from '../Dashboard';
import Usuarios from '../Usuarios';
import Meditacoes from '../Meditacoes';
import Respiracoes from '../Respiracoes';
import Musicas from '../Musicas';
import Notificacoes from '../Notificacoes';
import Videos from '../Videos';
import Administradores from '../Administradores';
import DadosExternos from '../DadosExternos';
import Tags from '../Tags';

function TabPanel (props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="tab-panel"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps (index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Home () {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container
            container
            spacing={0}
            xs={12}
        >
            <Grid
                item
                spacing={0}
                xs={12}
                md={2}
            >
                <Title>
                    <h2>Namastê</h2>
                </Title>

                <StyledTabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                >
                    <StyledTab
                        label="Dashboard"
                        {...a11yProps(0)}
                    />
                    <StyledTab
                        label="Usuários"
                        {...a11yProps(1)}
                    />
                    <StyledTab
                        label="Meditações"
                        {...a11yProps(2)}
                    />
                    <StyledTab
                        label="Respirações"
                        {...a11yProps(3)}
                    />
                    <StyledTab
                        label="Músicas"
                        {...a11yProps(4)}
                    />
                    <StyledTab
                        label="Notificações"
                        {...a11yProps(5)}
                    />
                    <StyledTab
                        label="Vídeos"
                        {...a11yProps(6)}
                    />
                    <StyledTab
                        label="Administradores"
                        {...a11yProps(7)}
                    />
                    <StyledTab
                        label="Dados externos"
                        {...a11yProps(8)}
                    />
                    <StyledTab
                        label="Tags"
                        {...a11yProps(9)}
                    />
                </StyledTabs>
            </Grid>

            <Grid
                item
                spacing={0}
                xs={12}
                md={10}
            >
                <TabPanel value={value} index={0}>
                    <Dashboard />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Usuarios />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Meditacoes />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Respiracoes />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Musicas />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Notificacoes />
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Videos />
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <Administradores />
                </TabPanel>
                <TabPanel value={value} index={8}>
                    <DadosExternos />
                </TabPanel>
                <TabPanel value={value} index={9}>
                    <Tags />
                </TabPanel>
            </Grid>
        </Container>
    );
}