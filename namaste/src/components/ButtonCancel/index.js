import React from 'react';

import {
    Button,
} from './styles';

function ButtonCancel (props) {
    const { onEventPropsClick } = props;

    return (
        <Button onClick={() => { onEventPropsClick() }}>
            <p className="cancelar">Cancelar</p>
        </Button>
    );
}

export default ButtonCancel;