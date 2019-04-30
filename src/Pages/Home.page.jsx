import React, { useState } from 'react';
import styles from './Home.module.css';
import { Image, Icon, Checkbox, Input, Container } from 'semantic-ui-react';
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
    <Container fluid style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className={styles.container}>
        {redirect}
        <div className={styles.image}>
          <Image src={logo} alt="logo" style={{ marginTop: '15vh', marginBottom: '15vh' }} />
        </div>
        <div className={styles.input}>
          <Input
            placeholder="Search..."
            icon={{ name: 'search', circular: true, link: true, onClick: () => handleInputClick() }}
            value={keyWord}
            onChange={handleInputChange}
            onKeyPress={(event) => event.key === 'Enter' && handleInputClick()}
            autoFocus={true}
            style={{ width: '100%' }}
          />
        </div>
        <div className={styles.checkboxGroup}>
          <div className={styles.checkbox}>
            <Icon className="twitter" color="blue" />
            <Checkbox toggle defaultChecked={true} onChange={() => handleToggleChange('twitter')} />
          </div>
          <div className={styles.checkbox}>
            <Icon className="reddit alien" color="red" />
            <Checkbox toggle defaultChecked={true} onChange={() => handleToggleChange('reddit')} />
          </div>
          <div className={styles.checkbox}>
            <Icon className="moon" color="green" />
            <Checkbox toggle defaultChecked={true} onChange={() => handleToggleChange('hacker')} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
