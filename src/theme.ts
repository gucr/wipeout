import {createGlobalStyle} from "styled-components";

export const colors = {
    background:'#030531',
    accent: '#ebbc12'
}

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Amalgama';
        src: url('/Amalgama.woff2') format('woff2');
        font-weight: bold;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'F5000';
        src: url('/F5000.woff2') format('woff2');
        font-weight: bold;
        font-style: normal;
    }

    html {
        background-color: ${colors.background};
        font-family: 'Amalgama';
        font-size: 1vmin;
    }
`