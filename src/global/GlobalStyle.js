import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  button, input {
    font-family: 'Noto Sans', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cecece;
  }
`