import React, { Component } from 'react';
import './Home.css';
import { Image, Icon, Checkbox, Input } from 'semantic-ui-react';
import logo from './assets/images/Logo.png';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="image">
          <Image src={logo} alt="logo" />
        </div>
        <div className="title">
          <h1>Welcome to Search Point!</h1>
        </div>
        <div className="input">
          <Input
            placeholder="Search..."
            icon={{ name: 'search', circular: true, link: true }}
            value={this.props.searchValue}
            onChange={this.props.changeHandler}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
              }
            }}
          />
        </div>
        <div className="checkbox">
          <Icon className="twitter" />
          <Checkbox toggle defaultChecked={true} onChange={() => this.props.onToggle('twitter')} />
          <Icon className="reddit alien" />
          <Checkbox toggle defaultChecked={true} onChange={() => this.props.onToggle('reddit')} />
          <Icon className="moon" />
          <Checkbox toggle defaultChecked={true} onChange={() => this.props.onToggle('hacker')} />
        </div>
      </div>
    );
  }
}

export default Home;
