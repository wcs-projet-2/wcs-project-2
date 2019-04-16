import React from 'react';
import './topBar.css';
import { Input, Menu, Icon, Container, Checkbox, Image } from 'semantic-ui-react';
// import { prependOnceListener } from 'cluster';
import logo from '../assets/images/Logo.png';

const TopBar = (props) => {
  return (
    <Container>
      <Menu>
        <Menu.Item id="image">
          <a href="/">
            <Image src={logo} alt="logo" />
          </a>
        </Menu.Item>
        <h1 id="title">Welcome to Search Point!</h1>
        <Menu.Item id="search" position="right">
          <Input
            className="icon"
            placeholder="Search..."
            icon={{ name: 'search', circular: props.toggle, link: true, onClick: () => props.clickHandler() }}
            value={props.searchValue}
            onChange={props.changeHandler}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                props.clickHandler();
              }
            }}
          />
          <div>
            <Icon className="twitter" />
            <Checkbox toggle checked={props.toggle.twitter} onChange={() => props.onToggle('twitter')} />
          </div>
          <div>
            <Icon className="reddit alien" />
            <Checkbox toggle checked={props.toggle.reddit} onChange={() => props.onToggle('reddit')} />
          </div>
          <div>
            <Icon className="moon" />
            <Checkbox toggle checked={props.toggle.hacker} onChange={() => props.onToggle('hacker')} />
          </div>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default TopBar;
