import React from 'react';
import './topBar.css';
import { Input, Menu, Icon, Container, Checkbox, Image, Responsive } from 'semantic-ui-react';
// import { prependOnceListener } from 'cluster';
import logo from './assets/images/Logo.png';

const TopBar = (props) => {
  return (
    <Responsive minWidth={320} maxWidth={2580}>
      <Container fluid>
        <Menu>
          <Menu.Item id="image">
            <Image src={logo} alt="logo" />
          </Menu.Item>
          <h1 id="title">Welcome to Search Point!</h1>
          <Menu.Item id="search" position="right">
            <Input
              className="icon"
              placeholder="Search..."
              icon={{ name: 'search', circular: true, link: true, onClick: () => props.clickHandler() }}
              value={props.searchValue}
              onChange={props.changeHandler}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  props.clickHandler();
                }
              }}
            />
          </Menu.Item>
          <Menu.Item>
            <div>
              <Icon className="twitter" />
              <Checkbox toggle defaultChecked={true} onChange={() => props.onToggle('twitter')} />
            </div>
            <div>
              <Icon className="reddit alien" />
              <Checkbox toggle defaultChecked={true} onChange={() => props.onToggle('reddit')} />
            </div>
            <div>
              <Icon className="moon" />
              <Checkbox toggle defaultChecked={true} onChange={() => props.onToggle('hacker')} />
            </div>
          </Menu.Item>
        </Menu>
      </Container>
    </Responsive>
  );
};

export default TopBar;
