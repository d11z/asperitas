import React from 'react';
import Header from './Header';
import MainView from './MainView';

import './App.css';

const App = props => (
  <div className='app'>
    <Header/>
    <MainView/>
  </div>
);

export default App;
