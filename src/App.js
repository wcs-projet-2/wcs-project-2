import React, { Component } from 'react';
import './App.css';
import Router from './Router';
import 'semantic-ui-css/semantic.min.css';

import getDataFromReddit from './APIFunctions/getDataFromReddit';
import getDataFromHackerNoon from './APIFunctions/getDataFromHN';
import getDataFromTwitter from './APIFunctions/getDataFromTwitter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: '',
      redditData: [],
      twitterData: [],
      hackerNoonData: [],
      sourceToggle: {
        twitter: true,
        reddit: true,
        hacker: true,
      },
    };
    this.refreshDataFromAPI = this.refreshDataFromAPI.bind(this);
  }

  refreshDataFromAPI(keyWord = 'Apple', sort = 'relevance', nbOfItems = 25) {
    // Refresh data from Reddit
    getDataFromReddit(keyWord, sort, nbOfItems).then((result) => this.setState({ redditData: result }));

    // refresh data from Twitter
    this.setState({ twitterData: getDataFromTwitter() });

    // refresh data from Hacker noon
    this.setState({ hackerNoonData: getDataFromHackerNoon() });
  }

  handleChange = (event) => {
    this.setState({
      keyWord: event.target.value,
    });
  };

  handleClick = (event) => {
    this.refreshDataFromAPI(this.state.keyWord);
  };

  handleToggle = (source) => {
    let sourceToggle = { ...this.state.sourceToggle };
    sourceToggle[source] = !sourceToggle[source];
    this.setState({ sourceToggle });
  };

  render() {
    return <Router />;
  }
}

export default App;
