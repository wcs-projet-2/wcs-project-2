import React, { Component } from 'react';
import './Home.page.css';
import { Image, Icon, Checkbox, Input } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import logo from '../assets/images/Logo.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toSearch: false,
      keyWord: '',
      sourceToggle: {
        twitter: true,
        reddit: true,
        hacker: true,
      },
    };
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputClick = (event) => {
    this.setState({ toSearch: true });
  };

  handleInputChange = (event) => {
    this.setState({ keyWord: event.target.value });
  };

  handleToggleChange = (source) => {
    this.setState((prevState) => {
      let objectReturned = { ...prevState.sourceToggle };
      objectReturned[source] = !objectReturned[source];
      return { sourceToggle: objectReturned };
    });
  };

  render() {
    let urlParams = `?keyWord=${this.state.keyWord}&STTwitter=${this.state.sourceToggle.twitter}&STReddit=${
      this.state.sourceToggle.reddit
    }&STHackerNoon=${this.state.sourceToggle.hacker}`;
    console.log(urlParams);
    let redirect = this.state.toSearch && <Redirect to={{ pathname: '/searchpoint', search: urlParams }} />;

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
            icon={{ name: 'search', circular: true, link: true, onClick: () => this.handleInputClick() }}
            value={this.state.keyWord}
            onChange={this.handleInputChange}
            onKeyPress={(event) => event.key === 'Enter' && this.handleInputClick()}
            autoFocus={true}
          />
        </div>
        <div className="checkbox">
          <Icon className="twitter" />
          <Checkbox toggle defaultChecked={true} name="toto" onChange={() => this.handleToggleChange('twitter')} />
          <Icon className="reddit alien" />
          <Checkbox toggle defaultChecked={true} onChange={() => this.handleToggleChange('reddit')} />
          <Icon className="moon" />
          <Checkbox toggle defaultChecked={true} onChange={() => this.handleToggleChange('hacker')} />
        </div>
      </div>
    );
  }
}

export default Home;
