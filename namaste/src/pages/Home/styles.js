import styled from 'styled-components';
import {
    Tabs,
    Tab,
    Box
} from '@material-ui/core';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    
    .tab-panel{
        width: 100%;
    }
`;

export const StyledTabs = styled(Tabs)`
    &&{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        background: #4e77c1;
        padding: 15px 0;
        width: 300px;

        span.MuiTabs-indicator {
            display: none;
        }
    }
`;

export const StyledTab = styled(Tab)`
    &&{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 5px 15px;
        color: #fff;
        font-weight: 400;

        span.MuiTab-wrapper{
            display: flex;
            align-items: center;
            width: auto;
            padding-left: 15px;
            text-transform: initial;
        }

        &.Mui-selected{
            font-weight: 500;
            background: #40629e;
        }
    }
`;

export const StyledBox = styled(Box)`
    &&{
        display: flex;
        background: #f2f2f2;
        width: 100%;
        height: 100vh;
        color: #515151;
        padding: 15px;
    }
`;