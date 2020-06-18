import styled from 'styled-components';
import {
    Tabs,
    Tab,
    Grid,
} from '@material-ui/core';

export const Container = styled(Grid)`
    .tab-panel{
        background: #f2f2f2;
        color: #515151;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    h2{
        font-weight: 400;
        text-align: center;
        border-top: 1px solid transparent;
        border-bottom: 1px solid #ffffff77;
        padding: 25px 30px;
        height: 82px;
        width: 90%;
    }
`

export const StyledTabs = styled(Tabs)`
    &&{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        background: #4e77c1;
        padding: 20px 0;
        width: 100%;
        
        button.MuiTab-root{
            max-width: none;
        }

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
        width: 100%;

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
