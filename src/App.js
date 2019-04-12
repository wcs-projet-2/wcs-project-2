import React, { Component } from 'react';
import './App.css';
import TopBar from './Components/topBar.jsx';
import Content from './Components/content.jsx';
import BottomBar from './Components/bottomBar.jsx';
import 'semantic-ui-css/semantic.min.css';
import getDataFromReddit from './APIFunctions/getDataFromReddit';

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
    // Add the code here...

    // refresh data from Hacker noon
    // Add the code here...
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
    return (
      <div className="App">
        <TopBar
          toggle={this.state.sourceToggle}
          onToggle={this.handleToggle}
          changeHandler={this.handleChange}
          clickHandler={this.handleClick}
          searchValue={this.state.keyWord}
        />
        <Content
          toggle={this.state.sourceToggle}
          redditData={this.state.redditData}
          twitterData={this.state.twitterData}
          hackerNoonData={this.state.hackerNoonData}
        />
        <BottomBar />
      </div>
    );
  }
}

export default App;
