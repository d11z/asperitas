import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import MainView from './MainView';
import LoginFormContainer from '../containers/LoginFormContainer';
import SignupFormContainer from '../containers/SignupFormContainer';
import CreatePostForm from './CreatePostForm';

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
    <HeaderContainer />
    <Switch>
      <Route path='/login' component={LoginFormContainer} />
      <Route path='/signup' component={SignupFormContainer} />
      <Route path='/createpost' component={CreatePostForm} />
      <Route path='/' component={MainView} />
    </Switch>
  </>
);

export default App;
