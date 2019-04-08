import React, { Component } from 'react';
import Article from './Article';
import { Grid, Header, Icon } from 'semantic-ui-react';
import './source.css';

class Source extends Component {
  render() {
    let title = this.props.source;
    let iconName = this.props.source;
    let iconColor;

    if (iconName === 'twitter') {
      iconColor = 'blue';
    } else if (iconName === 'reddit') {
      iconColor = 'red';
    } else if (iconName === 'hacker') {
      iconColor = 'green';
    }

    let cardDisplay = this.props.data.map((post) => {
      return (
        <Grid.Column width={3}>
          <Article title={post.title} date={post.creationDate} content={post.text} />
        </Grid.Column>
      );
    });

    return (
      <Grid>
        <Grid.Row>
          <Header textAlign="left">
            <Icon name={iconName} color={iconColor} />
          </Header>
          <p>{title}</p>
        </Grid.Row>
        <Grid.Row>{cardDisplay}</Grid.Row>
      </Grid>
    );
  }
}

export default Source;
