import React from 'react';
import {
    FaUser,
    FaBullseye,
    FaUsers,
    FaCrown,
} from "react-icons/fa";

import { Container } from './styles';

function CardDashboard (props) {
    return (
        <Container>
            <div className="header">
                <div className="infos">
                    <h5>{props.title}</h5>
                    <h3>{props.qtd}</h3>
                </div>

                <span>
                    {(props.icone === "FaUser" ? <FaUser color={"#fff"} size={20} /> :
                        (props.icone === "FaBullseye") ? <FaBullseye color={"#fff"} size={24} /> :
                            (props.icone === "FaUsers") ? <FaUsers color={"#fff"} size={24} /> :
                                (props.icone === "FaCrown") ? <FaCrown color={"#fff"} size={24} /> : '')}
                </span>
            </div>
        </Container>
    );
}

export default CardDashboard;