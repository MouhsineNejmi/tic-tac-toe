import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  html {
    height: 100vh;
    background-color: #1a2a33;
    color: #fff;
    font-family: "Outfit", sans-serif;
    font-size: 12px;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
