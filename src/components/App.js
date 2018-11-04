import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header subreddit='r/all'/>
      </div>
    );
  }
}

export default App;
