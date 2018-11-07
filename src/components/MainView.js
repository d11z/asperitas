import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import ListView from './ListView';

import './MainView.css';

const MainView = props => (
  <div className='content'>
    <Sidebar/>
    <main className='main'>
      <Route exact path='/' component={ListView}/>
      <Route path='/r/:category' component={ListView}/>
    </main>
  </div>
);

export default MainView;
