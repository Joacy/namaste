import React from 'react';

import Header from '../../components/Header';

import AppStore from '../../assets/externos/app-store.png';
import PlayStore from '../../assets/externos/play-store.png';
import Analytics from '../../assets/externos/google-analytics.png';

import {
    Container,
    StyledBox
} from './styles';

function DadosExternos () {
    return (
        <Container>
            <Header nome='Dados Externos' />
            <StyledBox>
                <div className="links">
                    <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <img src={AppStore} alt="AppStore" />
                    </a>

                    <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <img src={PlayStore} alt="PlayStore" />
                    </a>

                    <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <img src={Analytics} alt="Analytics" />
                    </a>
                </div>
            </StyledBox>
        </Container>
    );
}

export default DadosExternos;