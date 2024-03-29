import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 70vw;
    height: 70vh;
    box-sizing: border-box;
    font-size: 17pt;
    background: #fff;
    font-family: 'Lato', sans-serif;
  }

  img {
    width: 80%;
    height: auto;
  }

a {
  color: #000;

}

`;

export default GlobalStyle;