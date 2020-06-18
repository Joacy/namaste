import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 50px;
    width: 100%;
    background: #fbfbfb;
    border-bottom: 1px solid #cccccc77;
`;

export const PageAtual = styled.div`
    h3{
        font-size: 18px;
        font-weight: 500;
    }
`

export const Links = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;

    li {
        font-size: 16px;
        font-weight: 400;
    }

    li:last-child{
        color: #ea4335;
    }

    li + li{
        margin-left: 35px;
    }
`