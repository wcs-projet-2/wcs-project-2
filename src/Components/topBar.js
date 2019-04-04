import React from 'react';
import './topBar.css';
import { Input, Menu, Dropdown, Icon, Container, Checkbox } from 'semantic-ui-react';

const TopBar = () => {
  return (
    <Container>
      <Menu>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMZFzQw4GUNeJz26PswTpAGojWR6zJn-745K2E2GiC6vHLqma1w"
          alt="logo"
        />
        <Menu.Item id="search" position="right" style={{ marginRight: '2em' }}>
          <Input className="icon" icon="search" placeholder="Search..." />
          <Dropdown>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name="twitter" />
                <Checkbox toggle />
              </Dropdown.Item>
              <Dropdown.Item>
                <Icon name="reddit alien" />
                <Checkbox toggle />
              </Dropdown.Item>
              <Dropdown.Item>
                <Icon name="hacker news" />
                <Checkbox toggle />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default TopBar;
