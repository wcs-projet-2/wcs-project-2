import React, { Component } from 'react';
import './App.css';
import TopBar from './topBar';
import Content from './content';
import BottomBar from './bottomBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Content />
        <BottomBar />
      </div>
    );
  }
}

export default App;
