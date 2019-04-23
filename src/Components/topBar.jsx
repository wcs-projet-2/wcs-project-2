import React from 'react';
import { Input, Menu, Icon, Container, Checkbox, Image, Responsive } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './topBar.css';
import logo from '../assets/images/Logo.png';

const TopBar = ({ keyWord, sourceToggles, handleToggle, handleChange, handleClick }) => {
  return (
    <Responsive minWidth={320} maxWidth={2580}>
      <Container fluid>
        <Menu>
          <Menu.Item id="image" onClick={() => (window.location = '/')}>
            <Image src={logo} alt="logo" />
          </Menu.Item>
          <h1 id="title">Welcome to Search Point!</h1>
          <Menu.Item id="search" position="right">
            <Input
              className="icon"
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
          </Menu.Item>
          <Menu.Item>
            <div>
              <Icon className="twitter" />
              <Checkbox toggle checked={sourceToggles.twitter} onChange={() => handleToggle('twitter')} />
            </div>
            <div>
              <Icon className="reddit alien" />
              <Checkbox toggle checked={sourceToggles.reddit} onChange={() => handleToggle('reddit')} />
            </div>
            <div>
              <Icon className="moon" />
              <Checkbox toggle checked={sourceToggles.hacker} onChange={() => handleToggle('hacker')} />
            </div>
          </Menu.Item>
        </Menu>
      </Container>
    </Responsive>
  );
};

export default TopBar;

TopBar.propTypes = {
  keyWord: PropTypes.string.isRequired,
  sourceToggles: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
