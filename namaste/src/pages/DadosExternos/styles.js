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
        background: #f2f2f2;
        width: 100%;
        height: calc(100vh - 82px);
        color: #515151;
        padding: 25px 35px;
    }

    .links{
        display: flex;
        
        a + a {
            margin-left: 25px;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;

            img {
                height: 100%;
                width: auto;
                object-fit: contain;
            }
        }
    }
`;