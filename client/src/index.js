import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';
import theme from './theme';
import GlobalStyle from './globalStyle';
import HeaderContainer from './components/Header/Container';
import LoginFormContainer from './components/LoginForm/Container';
import SignupFormContainer from './components/SignupForm/Container';
import CreatePostFormContainer from './components/CreatePostForm/Container';
import Home from './components/Home';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <GlobalStyle />
          <Route component={HeaderContainer} />
          <Switch>
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/signup' component={SignupFormContainer} />
            <Route path='/createpost' component={CreatePostFormContainer} />
            <Route path='/' component={Home} />
          </Switch>
        </>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
