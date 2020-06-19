import React, { useState } from 'react';

import Header from '../../components/Header';
import ButtonExpand from '../../components/ButtonExpand';
import ButtonCancel from '../../components/ButtonCancel';
import ButtonSave from '../../components/ButtonSave';

import {
    Container,
    StyledBox,
    Collapse,
    CollapseHeader,
    CollapseBody,
} from './styles';

function Tags () {
    const [tag, setTag] = useState('');

    function clearTag () {
        setTag('');
    }

    function addTag () {

    }

    return (
        <Container>
            <Header nome='Tags' />
            <StyledBox>
                <Collapse>
                    <CollapseHeader
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <ButtonExpand />
                    </CollapseHeader>
                    <CollapseBody>
                        <h5>Tag</h5>

                        <input
                            value={tag}
                            onChange={(e) => { setTag(e.target.value) }}
                        />

                        <div className="actions">
                            <ButtonCancel onEventPropsClick={clearTag.bind(this)} />

                            <ButtonSave onEventPropsClick={addTag.bind(this)} />
                        </div>
                    </CollapseBody>
                </Collapse>
            </StyledBox>
        </Container>
    );
}

export default Tags;