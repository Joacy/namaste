import styled from 'styled-components';
import {
    Box,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TablePagination,
    Checkbox,
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
        min-height: calc(100vh - 82px);
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
        margin-bottom: 25px;
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

export const Linha = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    margin-bottom: 20px;
    position: relative;
    
    svg {
        position: absolute;
        right: 190px;
    }
    
    input {
        border: 0;
        border-radius: 4px;
        background: #eaeaea;
        padding: 10px;
        padding-left: 35px;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        color: #787878;
        width: 220px;
    }

    input::placeholder {
        color: #787878;
    }
`;

export const Tabela = styled(Table)`
    && {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        background: #fefefe;
    }
`;

export const TabelaHead = styled(TableHead)`
    && {
        
    }
`;

export const TabelaBody = styled(TableBody)`
    && {
        background: #fefefe;
    }
`;

export const TabelaPagination = styled(TablePagination)`
    && {
        background: #fefefe;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }
`;

export const TabelaLinha = styled(TableRow)`
    && {
        background: #fefefe;
    }
`;

export const TabelaCelula = styled(TableCell)`
    && {
        background: #fefefe;
    }
`;

export const GreenCheckbox = styled(Checkbox)`
    && {
        &.Mui-checked {
            color: #009d70;
        }
    }
`;