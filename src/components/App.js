import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import MainView from './MainView';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
  }
`;

const App = props => (
  <>
    <GlobalStyle/>
    <Header/>
    <MainView/>
  </>
);

export default App;
