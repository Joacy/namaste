import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        background: #4e77c1;
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
`;