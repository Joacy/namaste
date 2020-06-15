import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel (props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f0f0f5',
        color: '#222',
    },
    tabs: {
        backgroundColor: '#4e77c1',
        color: '#fff',
        width: '20%',
    },
}));

export default function Dashboard () {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Dashboard" {...a11yProps(0)} />
                <Tab label="Usuários" {...a11yProps(1)} />
                <Tab label="Meditações" {...a11yProps(2)} />
                <Tab label="Respirações" {...a11yProps(3)} />
                <Tab label="Músicas" {...a11yProps(4)} />
                <Tab label="Notificações" {...a11yProps(5)} />
                <Tab label="Vídeos" {...a11yProps(6)} />
                <Tab label="Administradores" {...a11yProps(7)} />
                <Tab label="Dados externos" {...a11yProps(8)} />
                <Tab label="Tags" {...a11yProps(9)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <h3>Item One</h3>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h3>Item Two</h3>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h3>Item Three</h3>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <h3>Item Four</h3>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <h3>Item Five</h3>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <h3>Item Six</h3>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <h3>Item Seven</h3>
            </TabPanel>
            <TabPanel value={value} index={7}>
                <h3>Item Eight</h3>
            </TabPanel>
            <TabPanel value={value} index={8}>
                <h3>Item Nine</h3>
            </TabPanel>
            <TabPanel value={value} index={9}>
                <h3>Item Ten</h3>
            </TabPanel>
        </div>
    );
}