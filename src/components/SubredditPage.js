import React from 'react';
import Sidebar from './Sidebar';
import PostList from './PostList';

import './SubredditPage.css';

const SubredditPage = props => (
  <div className='content'>
    <Sidebar/>
    <main className='main'>
      <PostList posts={props.posts}/>
    </main>
  </div>
);

export default SubredditPage;
