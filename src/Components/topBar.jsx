import React from 'react';
import { Input, Menu, Icon, Container, Checkbox, Image, Responsive } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './topBar.css';
import logo from '../assets/images/Logo.png';

const TopBar = ({ keyWord, sourceToggles, handleToggle, handleChange, handleClick }) => {
  return (
    <div className="topbar">
      <Responsive minWidth={320} maxWidth={2580}>
        <Container fluid>
          <Menu>
            <div>
              <Image id="image" onClick={() => (window.location = '/')} src={logo} alt="logo" />
            </div>
            <h1 className="titleT">Welcome to Search Point!</h1>
            <Input
              className="inputT"
              placeholder="Search..."
              icon={{ name: 'search', circular: true, link: true, onClick: () => handleClick() }}
              value={keyWord}
              onChange={handleChange}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleClick();
                }
              }}
            />
            {/* <div className="item">
              <Icon className="twitter" />
              <Checkbox toggle checked={sourceToggles.twitter} onChange={() => handleToggle('twitter')} />
              <Icon className="reddit alien" />
              <Checkbox toggle checked={sourceToggles.reddit} onChange={() => handleToggle('reddit')} />
              <Icon className="moon" />
              <Checkbox toggle checked={sourceToggles.hacker} onChange={() => handleToggle('hacker')} />
            </div> */}
            <div className="checkboxGroup">
              <div className="checkbox">
                <Icon className="twitter" color="blue" />
                <Responsive>
                  <Checkbox toggle checked={sourceToggles.twitter} onChange={() => handleToggle('twitter')} />
                </Responsive>
              </div>
              <div className="checkbox">
                <Icon className="reddit alien" color="red" />
                <Responsive>
                  <Checkbox toggle checked={sourceToggles.reddit} onChange={() => handleToggle('reddit')} />
                </Responsive>
              </div>
              <div className="checkbox">
                <Icon className="moon" color="green" />
                <Responsive>
                  <Checkbox toggle checked={sourceToggles.hacker} onChange={() => handleToggle('hacker')} />
                </Responsive>
              </div>
            </div>
          </Menu>
        </Container>
      </Responsive>
    </div>
  );
};

TopBar.propTypes = {
  keyWord: PropTypes.string.isRequired,
  sourceToggles: PropTypes.shape({
    twitter: PropTypes.bool.isRequired,
    reddit: PropTypes.bool.isRequired,
    hacker: PropTypes.bool.isRequired,
  }),
  handleToggle: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TopBar;
