import React, { Component } from 'react';
import './App.css';
import TopBar from './Components/topBar';
import Content from './Components/content';
import BottomBar from './Components/bottomBar';

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
