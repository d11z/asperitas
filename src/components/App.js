import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import MainView from './MainView';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
  }
  
  body {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const App = props => (
  <>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignupForm} />
      <Route path='/' component={MainView} />
    </Switch>
  </>
);

export default App;
