import styled from 'styled-components';
import {
    Box,
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
        padding: 15px;
    }
`;