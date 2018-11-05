import React from 'react';
import './Header.css';

const Header = props => (
  <header className='header'>
    <div className='header__main'>
      <h1 className='header__logo'>reddit</h1>
      <h2 className="header__subreddit">r/{props.subreddit}</h2>
    </div>
    <div className="header__links">
      <a href="/" className="header__link">log in</a>
      <a href="/" className="header__link">sign up</a>
    </div>
  </header>
);

export default Header;
