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
            height: 100px;

            img {
                height: 100%;
                width: auto;
                object-fit: contain;
            }
        }
    }

    @media screen and (max-width: 576px){
        .links {
            flex-direction: column;
         
            a + a {
                margin-left: 0;
                margin-top: 25px;
            }
         
            a {
                justify-content: center;
                width: 100%;
            }
        }
    }
`;