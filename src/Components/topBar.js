import React from 'react';
import './topBar.css';
import { Input, Menu, Icon, Container, Checkbox } from 'semantic-ui-react';
// import { prependOnceListener } from 'cluster';

const TopBar = (props) => {
  return (
    <Container>
      <Menu>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMZFzQw4GUNeJz26PswTpAGojWR6zJn-745K2E2GiC6vHLqma1w"
          alt="logo"
        />
        <Menu.Item id="search" position="right" style={{ marginRight: '2em' }}>
          <Input
            className="icon"
            placeholder="Search..."
            icon={{ name: 'search', circular: true, link: true, onClick: () => props.clickHandler() }}
            value={props.searchValue}
            onChange={props.changeHandler}
          />
          <div>
            <Icon className="twitter" />
            <Checkbox toggle defaultChecked="true" onChange={() => props.onToggle('twitter')} />
          </div>
          <div>
            <Icon className="reddit alien" />
            <Checkbox toggle defaultChecked="true" onChange={() => props.onToggle('reddit')} />
          </div>
          <div>
            <Icon className="moon" />
            <Checkbox toggle defaultChecked="true" onChange={() => props.onToggle('hacker')} />
          </div>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default TopBar;
