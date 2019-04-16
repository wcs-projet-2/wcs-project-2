import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Components/Home';
import 'semantic-ui-css/semantic.min.css';
import SearchPoint from './Components/SearchPoint';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/searchpoint" component={SearchPoint} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
