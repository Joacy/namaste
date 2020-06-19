import styled from 'styled-components';

import {
    Button
} from '@material-ui/core';

export const ButtonStyled = styled(Button)`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #b772b9;
        width: 56px;
        min-width: 50px;
        height: 56px;
        padding: 0px;
        border-radius: 50%;
        box-shadow: 1px 1px 5px 0px #787878;
        
        span.MuiButton-label{
            height: 20px;
            width: 20px;
            padding: 0;
        }

        &:hover{
            background-color: #b772b9ee;
        }
    }
`;
