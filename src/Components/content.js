import React, { Component } from 'react';
import Source from './source';

class Content extends Component {
  render() {
    return (
      <div>
        <Source source="twitter" data={this.props.redditData} />
        <Source source="reddit" data={this.props.redditData} />
        <Source source="hacker noon" data={this.props.redditData} />
      </div>
    );
  }
}

export default Content;
