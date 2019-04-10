import React, { Component } from 'react';
import Source from './source';

class Content extends Component {
  render() {
    return (
      <div>
        {this.props.toggle ? (
          <div>
            <Source source="twitter" data={this.props.redditData} />
          </div>
        ) : (
          <div className="Twitter-toggle">
            <Source source="twitter" data={this.props.redditData} />
          </div>
        )}

        {this.props.toggle ? (
          <div>
            <Source source="reddit" data={this.props.redditData} />
          </div>
        ) : (
          <div className="Reddit-toggle">
            <Source source="reddit" data={this.props.redditData} />
          </div>
        )}

        {this.props.toggle ? (
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
