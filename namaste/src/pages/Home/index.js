import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import {
    StyledTabs,
    StyledTab,
    StyledBox,
    Container,
} from './styles';

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
                <StyledBox>
                    <Typography>{children}</Typography>
                </StyledBox>
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
        <Container>
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
        </Container>
    );
}