import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='header__main'>
          <h1 className='header__logo'>reddit</h1>
          <h2 className="header__subreddit">{this.props.subreddit}</h2>
        </div>
        <div className="header__links">
          <a href="/" className="header__link">log in</a>
          <a href="/" className="header__link">sign up</a>
        </div>
      </header>
    );
  }
}

export default Header;
