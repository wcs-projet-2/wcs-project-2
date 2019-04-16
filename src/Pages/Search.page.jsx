import React, { Component } from 'react';
import TopBar from '../Components/topBar';
import Content from '../Components/content';
import BottomBar from '../Components/bottomBar';
import getDataFromReddit from '../APIFunctions/getDataFromReddit';

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

  componentDidMount() {
    this.setState((prevState) => {
      let finalState = { ...prevState };
      console.log('final');
      console.log(finalState);

      finalState.keyWord = this.props.location.state.keyWord;
      finalState.sourceToggle = this.props.location.state.sourceToggle;

      console.log('final2');
      console.log(finalState);
      return finalState;
    });
  }

  render() {
    console.log(this.props.location.state);
    console.log(this.state);

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

export default SearchPoint;
