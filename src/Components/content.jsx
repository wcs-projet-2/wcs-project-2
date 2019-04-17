/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import Source from './source.jsx';
import './content.css';
import { Responsive } from 'semantic-ui-react';

class Content extends Component {
  render() {
    let resultTwitter;
    let resultReddit;
    let resultHacker;

    this.props.toggle.twitter ? (resultTwitter = '') : (resultTwitter = 'Content-toggle');
    this.props.toggle.reddit ? (resultReddit = '') : (resultReddit = 'Content-toggle');
    this.props.toggle.hacker ? (resultHacker = '') : (resultHacker = 'Content-toggle');

    return (
      <div className="sourceContent">
        <div className={resultTwitter}>
          <Responsive>
            <Source source="twitter" data={this.props.redditData} />
          </Responsive>
        </div>
        <div className={resultReddit}>
          <Responsive>
            <Source source="reddit" data={this.props.redditData} />
          </Responsive>
        </div>
        <div className={resultHacker}>
          <Responsive>
            <Source source="hacker noon" data={this.props.redditData} />
          </Responsive>
        </div>
      </div>
    );
  }
}

export default Content;
