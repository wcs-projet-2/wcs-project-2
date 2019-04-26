import React, { useState } from 'react';
import './Home.page.css';
import { Image, Icon, Checkbox, Input } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import logo from '../assets/images/Logo.png';

const Home = () => {
  // State creation
  const [toSearch, setToSearch] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [sourceToggle, setSourceToggle] = useState({
    twitter: true,
    reddit: true,
    hacker: true,
  });

  const handleInputClick = (event) => {
    setToSearch(true);
  };

  const handleInputChange = (event) => {
    setKeyWord(event.target.value);
  };

  const handleToggleChange = (source) => {
    setSourceToggle({ ...sourceToggle, [source]: !sourceToggle[source] });
  };

  let urlParams = `?keyWord=${keyWord}&STTwitter=${sourceToggle.twitter}&STReddit=${sourceToggle.reddit}&STHackerNoon=${
    sourceToggle.hacker
  }`;
  let redirect = toSearch && <Redirect to={{ pathname: '/searchpoint', search: urlParams }} />;

  return (
    <div className="container">
      {redirect}
      <div className="image">
        <Image src={logo} alt="logo" />
      </div>
      <div className="title">
        <h1>Welcome to Search Point!</h1>
      </div>
      <div className="input">
        <Input
          placeholder="Search..."
          icon={{ name: 'search', circular: true, link: true, onClick: () => handleInputClick() }}
          value={keyWord}
          onChange={handleInputChange}
          onKeyPress={(event) => event.key === 'Enter' && handleInputClick()}
          autoFocus={true}
        />
      </div>
      <div className="checkbox">
        <Icon className="twitter" />
        <Checkbox toggle defaultChecked={true} name="toto" onChange={() => handleToggleChange('twitter')} />
        <Icon className="reddit alien" />
        <Checkbox toggle defaultChecked={true} onChange={() => handleToggleChange('reddit')} />
        <Icon className="moon" />
        <Checkbox toggle defaultChecked={true} onChange={() => handleToggleChange('hacker')} />
      </div>
    </div>
  );
};

export default Home;
