import React, { useState } from 'react';

import logo from '../../assets/logo.png';

import {
    ContainerStyled,
    Logo,
    Form,
    Text,
    Input,
    ButtonSubmit,
    ForgotPassword,
} from './styles';

function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin (e) {
        e.preventDefault();
    };

    return (
        <ContainerStyled>
            <Logo>
                <img src={logo} alt="Namastê" />
            </Logo>
            <Form onSubmit={handleLogin}>
                <Text>Faça seu login</Text>

                <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    required
                />

                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Senha"
                    required
                />

                <ButtonSubmit type="submit" variant="contained" color="primary" size="large">
                    Entrar
                </ButtonSubmit>

                <ForgotPassword to='/password-reset'>
                    Esqueceu sua <span>senha?</span>
                </ForgotPassword>
            </Form>
        </ContainerStyled>
    );
}

export default Login;