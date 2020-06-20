import React, { useState } from 'react';
import {
    MdModeEdit,
    MdSearch,
} from 'react-icons/md';

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
    Linha,
    Tabela,
    TabelaHead,
    TabelaBody,
    TabelaLinha,
    TabelaCelula,
    TabelaPagination,
    GreenCheckbox,
} from './styles';

function Tags () {
    const [tag, setTag] = useState('');
    const [query, setQuery] = useState('');

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

                <Linha>
                    <MdSearch color="#787878" size={20} />
                    <input
                        value={query}
                        onChange={(e) => { setQuery(e.target.value) }}
                        placeholder="Localizar"
                    />
                </Linha>

                <Tabela
                    aria-labelledby="tableTitle"
                    size="small"
                    aria-label="enhanced table"
                >
                    <TabelaHead>
                        <TabelaLinha>
                            <TabelaCelula>
                                <p>Tag</p>
                            </TabelaCelula>
                            <TabelaCelula>
                                <p>Ativada</p>
                            </TabelaCelula>
                            <TabelaCelula>

                            </TabelaCelula>
                        </TabelaLinha>
                    </TabelaHead>

                    <TabelaBody>
                        <TabelaLinha>
                            <TabelaCelula>
                                <h5>Insônia</h5>
                            </TabelaCelula>
                            <TabelaCelula>
                                <GreenCheckbox />
                            </TabelaCelula>
                            <TabelaCelula>
                                <MdModeEdit color="#4e77c1" size={24} />
                            </TabelaCelula>
                        </TabelaLinha>

                        <TabelaLinha>
                            <TabelaCelula>
                                <h5>Insônia</h5>
                            </TabelaCelula>
                            <TabelaCelula>
                                <GreenCheckbox />
                            </TabelaCelula>
                            <TabelaCelula>
                                <MdModeEdit color="#4e77c1" size={24} />
                            </TabelaCelula>
                        </TabelaLinha>

                        <TabelaLinha>
                            <TabelaCelula>
                                <h5>Insônia</h5>
                            </TabelaCelula>
                            <TabelaCelula>
                                <GreenCheckbox />
                            </TabelaCelula>
                            <TabelaCelula>
                                <MdModeEdit color="#4e77c1" size={24} />
                            </TabelaCelula>
                        </TabelaLinha>

                        <TabelaLinha>
                            <TabelaCelula>
                                <h5>Insônia</h5>
                            </TabelaCelula>
                            <TabelaCelula>
                                <GreenCheckbox />
                            </TabelaCelula>
                            <TabelaCelula>
                                <MdModeEdit color="#4e77c1" size={24} />
                            </TabelaCelula>
                        </TabelaLinha>
                    </TabelaBody>
                </Tabela>

                <TabelaPagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={10}
                    rowsPerPage={10}
                    page={1}
                // onChangePage={handleChangePage}
                // onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </StyledBox>
        </Container>
    );
}

export default Tags;