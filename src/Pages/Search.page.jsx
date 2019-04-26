import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import TopBar from '../Components/topBar';
import Content from '../Components/content';
import BottomBar from '../Components/bottomBar';
import getDataFromReddit from '../APIFunctions/getDataFromReddit';
import getDataFromTwitter from '../APIFunctions/getDataFromTwitter';
import getDataFromHackerNoon from '../APIFunctions/getDataFromHackerNoon';

const SearchPoint = (props) => {
  // State definition
  const [keyWord, setKeyWord] = useState('');
  const [redditData, setRedditData] = useState([]);
  const [twitterData, setTwitterData] = useState([]);
  const [hackerNoonData, setHackerNoonData] = useState([]);
  const [sourceToggles, setSourceToggles] = useState({
    twitter: true,
    reddit: true,
    hacker: true,
  });

  const refreshDataFromAPI = (keyWord = 'Apple', sort = 'relevance', nbOfItems = 25) => {
    // Refresh data from Reddit
    getDataFromReddit(keyWord, sort, nbOfItems).then((result) => {
      if (result.length !== 0) {
        setRedditData(result);
      } else {
        alert('Oups, no result for this keyword');
      }
    });

    // refresh data from Twitter
    setTwitterData(getDataFromTwitter());

    // refresh data from Hacker noon
    setHackerNoonData(getDataFromHackerNoon());
  };

  // Event handlers
  const handleChange = (event) => {
    setKeyWord(event.target.value);
  };

  const handleClick = (event) => {
    refreshDataFromAPI(keyWord);
  };

  const handleToggleChange = (source) => {
    setSourceToggles({ ...sourceToggles, [source]: !sourceToggles[source] });
  };

  // Each time the URL is changed --> Update KeyWord and sourceToggles + refresh API data
  useEffect(() => {
    let urlParams = queryString.parse(props.location.search);
    setKeyWord(urlParams.keyWord);
    setSourceToggles({
      twitter: urlParams.STTwitter === 'true',
      reddit: urlParams.STReddit === 'true',
      hacker: urlParams.STHackerNoon === 'true',
    });
    refreshDataFromAPI(urlParams.keyWord);
  }, [props.location.search]);

  // Rendering
  return (
    <div className="appBody">
      <TopBar
        keyWord={keyWord}
        sourceToggles={sourceToggles}
        handleToggle={handleToggleChange}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <Content
        sourceToggles={sourceToggles}
        redditData={redditData}
        twitterData={twitterData}
        hackerNoonData={hackerNoonData}
      />
      <BottomBar />
    </div>
  );
};

export default SearchPoint;
