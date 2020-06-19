import styled from 'styled-components';
import {
    Box,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from '@material-ui/core';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledBox = styled(Box)`
    &&{
        display: flex;
        flex-direction: column;
        background: #f2f2f2;
        width: 100%;
        height: calc(100vh - 82px);
        color: #515151;
        padding: 25px 35px;
    }
`;

export const Collapse = styled(ExpansionPanel)`
    && {
        display: flex;
        flex-direction: column;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
    }
`;

export const CollapseHeader = styled(ExpansionPanelSummary)`
    && {
        width: 56px;
        height: 56px;

        div.MuiExpansionPanelSummary-content{
            margin: 0;
            transition: none;
            transition: none;
            min-height: 50px;
        }

        div.MuiExpansionPanelSummary-content.Mui-expanded{
            margin: 0;
            transition: none;
        }
    }
`;

export const CollapseBody = styled(ExpansionPanelDetails)`
    && {
        display: flex;
        flex-direction: column;
        padding: 25px 0;
        margin: 0;
        max-width: 300px;

        h5 {
            color: #5e5e64;
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 20px;
        }

        input {
            padding: 7px 10px;
            background: #f9f9f9;
            border: 1px solid #aaa;
            border-radius: 2px;
            color: #787878;
            font-size: 14px;
            margin-bottom: 20px;
            font-family: 'Roboto', sans-serif;
        }

        .actions {
            display: flex;
            justify-content: flex-end;

            button + button {
                margin-left: 25px;
            }
        }
    }
`;