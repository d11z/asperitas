import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import theme from '../../theme';
import history from '../../util/history';
import AppScrollToTop from './ScrollToTop';
import GlobalStyle from '../../globalStyle';
import HeaderContainer from '../Header/Container';
import ErrorNotificationContainer from '../ErrorNotification/Container';
import LoginFormContainer from '../LoginForm/Container';
import SignupFormContainer from '../SignupForm/Container';
import CreatePostFormContainer from '../CreatePostForm/Container';
import Home from '../Home';

const App = props => (
  <ThemeProvider theme={theme(props.dark)}>
    <Router history={history}>
      <AppScrollToTop>
        <GlobalStyle />
        <Route component={HeaderContainer} />
        <Route component={ErrorNotificationContainer} />
        <Switch>
          <Route path='/login' component={LoginFormContainer} />
          <Route path='/signup' component={SignupFormContainer} />
          <Route path='/createpost' component={CreatePostFormContainer} />
          <Route path='/' component={Home} />
        </Switch>
      </AppScrollToTop>
    </Router>
  </ThemeProvider>
);

export default App;
