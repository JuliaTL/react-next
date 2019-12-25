import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: #622774;
    color: #39C72D;
    display: flex;
    font-family: Roboto;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  `;
