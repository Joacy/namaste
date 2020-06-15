import React, { useState } from 'react';

import logo from '../../assets/logo.png';

import {
    ContainerStyled,
    Logo,
    Form,
    Text,
    Description,
    Input,
    ButtonSubmit,
    RememberPassword,
} from './styles';

function PasswordReset () {
    const [email, setEmail] = useState('');

    function handlePasswordReset (e) {
        e.preventDefault();
    };

    return (
        <ContainerStyled>
            <Logo>
                <img src={logo} alt="Namastê" />
            </Logo>
            <Form onSubmit={handlePasswordReset}>
                <Text>Recupere sua senha</Text>

                <Description>
                    Digite seu e-mail de cadastro para receber as instruções de redefinição de senha
                </Description>

                <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    required
                />

                <ButtonSubmit type="submit" variant="contained" color="primary" size="large">
                    Recuperar senha
                </ButtonSubmit>

                <RememberPassword to='/'>Lembrou da <span>senha?</span></RememberPassword>
            </Form>
        </ContainerStyled>
    );
}

export default PasswordReset;