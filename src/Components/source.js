import React, { Component } from 'react';
import Article from './Article';
import { Grid, Header, Container, Image } from 'semantic-ui-react';
import './source.css';
import HackerNoon from './assets/images/HackerNoon.png';
import reddit from './assets/images/reddit.png';
import twitter from './assets/images/twitter.png';

class Source extends Component {
  render() {
    let title = this.props.source;
    let iconName = this.props.source;
    let icon;

    if (iconName === 'twitter') {
      icon = twitter;
    } else if (iconName === 'reddit') {
      icon = reddit;
    } else if (iconName === 'hacker noon') {
      icon = HackerNoon;
    }

    let cardDisplay = this.props.data.map((post) => {
      return (
        <Grid.Column width={3}>
          <Article title={post.title} date={post.creationDate} content={post.text} data={post} />
        </Grid.Column>
      );
    });

    return (
      <div>
        <br />
        <Container className="source">
          <Grid>
            <Grid.Row>
              <Header as="h3" textAlign="left" style={{ textTransform: 'uppercase' }}>
                {title}
                <Image src={icon} size="mini" />
              </Header>
              <br />
            </Grid.Row>
            <Grid.Row>{cardDisplay}</Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Source;
