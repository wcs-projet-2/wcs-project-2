import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home.page';
import SearchPoint from './Pages/Search.page';

class Router extends Component {
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

export default Router;
