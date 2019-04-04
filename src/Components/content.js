import React, { Component } from 'react';
import Source from './source';

class Content extends Component {
  render() {
    return (
      <div>
        <p>
          <Source source="Twitter" />
          <Source source="Reddit" />
          <Source source="Hacker" />
        </p>
      </div>
    );
  }
}

export default Content;
