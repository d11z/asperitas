import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
  }
  
  html, body, #root {
    height: 100%;
  }
  
  body {
    background-color: ${props => props.theme.pageBackground};
  }
`;

export default GlobalStyle;
