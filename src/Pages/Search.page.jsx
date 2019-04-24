import React, { Component } from 'react';
import queryString from 'query-string';
import TopBar from '../Components/topBar';
import Content from '../Components/content';
import BottomBar from '../Components/bottomBar';
import getDataFromReddit from '../APIFunctions/getDataFromReddit';
import getDataFromTwitter from '../APIFunctions/getDataFromTwitter';
import getDataFromHackerNoon from '../APIFunctions/getDataFromHackerNoon';

class SearchPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: '',
      redditData: [],
      twitterData: [],
      hackerNoonData: [],
      sourceToggles: {
        twitter: true,
        reddit: true,
        hacker: true,
      },
    };
    this.refreshDataFromAPI = this.refreshDataFromAPI.bind(this);
  }

  refreshDataFromAPI(keyWord = 'Apple', sort = 'relevance', nbOfItems = 25) {
    // Refresh data from Reddit
    getDataFromReddit(keyWord, sort, nbOfItems).then((result) => {
      if (result.length !== 0) {
        this.setState({ redditData: result });
      } else {
        alert('Oups, no result for this keyword');
      }
    });

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
    let sourceToggles = { ...this.state.sourceToggles };
    sourceToggles[source] = !sourceToggles[source];
    this.setState({ sourceToggles });
  };

  componentDidMount() {
    this.setState(
      (prevState) => {
        let urlParams = queryString.parse(this.props.location.search);
        let newState = { ...prevState };
        newState.keyWord = urlParams.keyWord;
        newState.sourceToggles = {
          twitter: urlParams.STTwitter === 'true',
          reddit: urlParams.STReddit === 'true',
          hacker: urlParams.STHackerNoon === 'true',
        };
        return newState;
      },
      () => this.refreshDataFromAPI(this.state.keyWord)
    );
  }

  render() {
    return (
      <div className="appBody">
        <TopBar
          keyWord={this.state.keyWord}
          sourceToggles={this.state.sourceToggles}
          handleToggle={this.handleToggle}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <Content
          sourceToggles={this.state.sourceToggles}
          redditData={this.state.redditData}
          twitterData={this.state.twitterData}
          hackerNoonData={this.state.hackerNoonData}
        />
        <BottomBar />
      </div>
    );
  }
}

export default SearchPoint;
