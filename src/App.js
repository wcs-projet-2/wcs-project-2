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
      redditData: [],
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

  componentDidMount() {
    this.refreshDataFromAPI();
  }

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
