import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header subreddit='all'/>
      </div>
    );
  }
}

export default App;
