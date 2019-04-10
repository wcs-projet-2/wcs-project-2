/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import Source from './source';
import './content.css';

class Content extends Component {
  render() {
    let resultTwitter;
    let resultReddit;
    let resultHacker;
    {
      this.props.toggle.twitter ? (resultTwitter = '') : (resultTwitter = 'Content-toggle');
    }
    {
      this.props.toggle.reddit ? (resultReddit = '') : (resultReddit = 'Content-toggle');
    }
    {
      this.props.toggle.hacker ? (resultHacker = '') : (resultHacker = 'Content-toggle');
    }
    return (
      <div>
        <div className={resultTwitter}>
          <Source source="twitter" data={this.props.redditData} />
        </div>
        <div className={resultReddit}>
          <Source source="reddit" data={this.props.redditData} />
        </div>
        <div className={resultHacker}>
          <Source source="hacker" data={this.props.redditData} />
        </div>
      </div>
    );
  }
}

export default Content;
