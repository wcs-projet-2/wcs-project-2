import React from 'react';
import './topBar.css';
import {
  Input,
  Menu,
  Icon,
  Container,
  Checkbox,
  Image,
  Grid,
  GridColumn,
  Segment,
  Responsive,
} from 'semantic-ui-react';
// import { prependOnceListener } from 'cluster';
import logo from '../assets/images/Logo.png';

const TopBar = (props) => {
  return (
    <Responsive>
      <Menu>
        <Container fluid>
          <Grid.Column>
            <Menu.Item id="image">
              <a href="/">
                <Image src={logo} alt="logo" />
              </a>
            </Menu.Item>
          </Grid.Column>
          <Grid.Column id="title">
            <h1>Welcome to Search Point!</h1>
          </Grid.Column>
          <Grid.Column className="papaContainer">
            <Menu.Item id="search" position="right">
              <Grid.Column>
                <div className="searchTopBar">
                  <Input
                    className="icon"
                    placeholder="Search..."
                    icon={{ name: 'search', link: true, onClick: () => props.clickHandler() }}
                    value={props.searchValue}
                    onChange={props.changeHandler}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        props.clickHandler();
                      }
                    }}
                  />
                </div>
                <div className="checkBox">
                  <ul>
                    <li>
                      <Icon className="twitter" color="blue" />
                      <Checkbox toggle checked={props.toggle.twitter} onChange={() => props.onToggle('twitter')} />
                    </li>
                    <li>
                      <Icon className="reddit alien" color="red" />
                      <Checkbox toggle checked={props.toggle.reddit} onChange={() => props.onToggle('reddit')} />
                    </li>
                    <li>
                      <Icon className="moon" color="green" />
                      <Checkbox toggle checked={props.toggle.hacker} onChange={() => props.onToggle('hacker')} />
                    </li>
                  </ul>
                </div>
              </Grid.Column>
            </Menu.Item>
          </Grid.Column>
        </Container>
      </Menu>
    </Responsive>
  );
};

export default TopBar;
