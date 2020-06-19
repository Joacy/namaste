import React from 'react';

import {
    Button,
} from './styles';

function ButtonSave (props) {
    const { onEventPropsClick } = props;

    return (
        <Button onClick={() => { onEventPropsClick() }}>
            <p className="salvar">Salvar</p>
        </Button>
    );
}

export default ButtonSave;