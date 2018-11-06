import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import SubredditPage from './SubredditPage';

import './App.css';

const App = props => (
  <Router>
    <div className='app'>
      <Header subreddit='all'/>
      <Route exact path='/' component={SubredditPage}/>
    </div>
  </Router>
);

export default App;
