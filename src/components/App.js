import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import MainView from './MainView';

import './App.css';

const App = props => (
  <Router>
    <div className='app'>
      <Header/>
      <Route exact path='/' component={MainView}/>
    </div>
  </Router>
);

export default App;
