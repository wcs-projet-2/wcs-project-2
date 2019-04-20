import React, { Component } from 'react';
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

  componentDidMount() {
    this.setState(
      (prevState) => {
        let finalState = { ...prevState };
        finalState.keyWord = this.props.location.state.keyWord;
        finalState.sourceToggle = this.props.location.state.sourceToggle;
        return finalState;
      },
      () => this.refreshDataFromAPI(this.state.keyWord)
    );
  }

  render() {
    return (
      <div className="appBody">
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

export default SearchPoint;
