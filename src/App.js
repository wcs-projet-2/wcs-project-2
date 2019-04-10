import React, { Component } from 'react';
import './App.css';
import TopBar from './Components/topBar';
import Content from './Components/content';
import BottomBar from './Components/bottomBar';
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
      toggle: false,
    };
    this.refreshDataFromAPI = this.refreshDataFromAPI.bind(this);
  }

  refreshDataFromAPI(keyWord = 'Apple', sort = 'relevance', nbOfItems = 5) {
    // Refresh data from Reddit
    getDataFromReddit(keyWord, sort, nbOfItems)
      .then((result) => {
        let arr = [];
        result.map((element) =>
          arr.push({
            title: element.title,
            text: element.text,
            author: element.author,
          })
        );
        return arr;
      })
      .then((result) => this.setState({ redditData: result }));

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

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="App">
        <TopBar
          onToggle={this.state.handleToggle}
          changeHandler={this.handleChange}
          clickHandler={this.handleClick}
          searchValue={this.state.keyWord}
        />
        <Content
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
