import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = props => (
  <aside className='sidebar'>
    <button className='sidebar__create-post'>create post</button>
    <nav className='sidebar__nav'>
      <ul className='sub-list'>
        <li className='sub-list__item'>
          <Link to='/'>r/all</Link>
        </li>
        <li className='sub-list__item'>
          <Link to='/r/webdev'>r/webdev</Link>
        </li>
        <li className='sub-list__item'>
          <Link to='/r/javascript'>r/javascript</Link>
        </li>
        <li className='sub-list__item'>
          <Link to='/r/vim'>r/vim</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
