import React from 'react';
import Sidebar from './Sidebar';
import ListView from './ListView';

import './MainView.css';

const MainView = props => (
  <div className='content'>
    <Sidebar/>
    <main className='main'>
      <ListView posts={props.posts}/>
    </main>
  </div>
);

export default MainView;
