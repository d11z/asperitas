import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './Header/Container';
import LoginFormContainer from './LoginForm/Container';
import SignupFormContainer from './SignupForm/Container';
import CreatePostFormContainer from './CreatePostForm/Container';
import MainView from './MainView';

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

const App = () => (
  <>
    <GlobalStyle />
    <HeaderContainer />
    <Switch>
      <Route path='/login' component={LoginFormContainer} />
      <Route path='/signup' component={SignupFormContainer} />
      <Route path='/createpost' component={CreatePostFormContainer} />
      <Route path='/' component={MainView} />
    </Switch>
  </>
);

export default App;
