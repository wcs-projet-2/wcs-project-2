import React, { Component } from 'react';
import Source from './source';
import './content.css';

class Content extends Component {
  render() {
    return (
      <div>
        {this.props.toggle.twitter ? (
          <div>
            <Source source="twitter" data={this.props.redditData} />
          </div>
        ) : (
          <div className="Twitter-toggle">
            <Source source="twitter" data={this.props.redditData} />
          </div>
        )}

        {this.props.toggle.reddit ? (
          <div>
            <Source source="reddit" data={this.props.redditData} />
          </div>
        ) : (
          <div className="Reddit-toggle">
            <Source source="reddit" data={this.props.redditData} />
          </div>
        )}

        {this.props.toggle.hacker ? (
          <div>
            <Source source="hacker" data={this.props.redditData} />
          </div>
        ) : (
          <div className="Hacker-toggle">
            <Source source="hacker" data={this.props.redditData} />
          </div>
        )}
      </div>
    );
  }
}

export default Content;
