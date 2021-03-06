import styled from 'styled-components';
import {
    Container,
    Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export const ContainerStyled = styled(Container)`
    &&{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 70px;
        padding-bottom: 70px;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 400px;
    padding: 40px 30px;
    background: #fbfbfb;
    border-radius: 4px;
`;

export const Text = styled.h2`
    color: #515151;
    margin-bottom: 20px;
`;

export const Description = styled.h3`
    font-size: 18px;
    font-weight: normal;
    line-height: 1.4;
    color: #7a7a7a;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 10px 15px;
    height: 42px;
    margin-bottom: 20px;
    color: #515151;
    background: transparent;
`;

export const ButtonSubmit = styled(Button)`
    &&{
        background-color: #4e77c1;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 25px;

        &:hover{
            background-color: #4e77c1ee;
        }
    }
`;

export const RememberPassword = styled(Link)`
    text-decoration: none;
    color: #515151;
    text-align: center;
    font-weight: normal;
    font-size: 13px;
    margin-top: 20px;

    span{
        color: #4e77c1;
    }
`;