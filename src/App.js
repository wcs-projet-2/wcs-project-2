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
    this.refreshDataFromAPI(this.state.keyWord);
  };

  render() {
    return (
      <div className="App">
        <TopBar changeHandler={this.handleChange} searchValue={this.state.keyWord} />

        {/* Affichage à retirer une fois le lien avec content établi */}
        {this.state.redditData.map((post) => (
          <p>{post.title}</p>
        ))}

        <Content />
        <BottomBar />
      </div>
    );
  }
}

export default App;
