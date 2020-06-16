import React from 'react';

import {
    HeaderStyled,
    PageAtual,
    Links
} from './styles';

function Header (props) {
    return (
        <HeaderStyled>
            <PageAtual>
                <h3>{props.nome}</h3>
            </PageAtual>
            <Links>
                <li>Admin</li>
                <li>Sair</li>
            </Links>
        </HeaderStyled>
    );
}

export default Header;