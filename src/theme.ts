import {createGlobalStyle, css} from "styled-components";

export const colors = {
    background:'#030531',
    accent: '#ebbc12'
}

export const borderWidth = {
    large: '1.5rem',
    regular: '.7rem',
    small: '.35rem',
}

export const fontSet = {
    info: css`
        font-size: 5.5rem;
        font-family: 'F5000', 'monospace';
    `
}

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Amalgama';
    src: url('/Amalgama.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    ascent-override: 110%;
  }

  @font-face {
    font-family: 'F5000';
    src: url('/F5000.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    ascent-override: 100%;
  }

  html {
    background-color: ${colors.background};
    font-family: 'Amalgama', 'monospace';
    font-size: .5vmin;
    letter-spacing: .5rem;
    color: white;
    line-height: 1;
  }

  h1 {
    font-size: 12rem;
    padding: 0 12rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`