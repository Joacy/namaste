import React from 'react';

import { FiPlus } from 'react-icons/fi';

import {
    ButtonStyled,
} from './styles';

function ButtonExpand () {
    return (
        <ButtonStyled size="large">
            <FiPlus color={"#fff"} size={20} />
        </ButtonStyled>
    );
}

export default ButtonExpand;