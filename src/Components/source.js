import React, { Component } from 'react';
import Article from './Article';
import { Grid, Header, Container, Image, Button } from 'semantic-ui-react';
import './source.css';
import HackerNoon from './assets/images/HackerNoon.png';
import reddit from './assets/images/reddit.png';
import twitter from './assets/images/twitter.png';

class Source extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      startIndex: 0,
      nbCard: 4,
    };
  }

  handleClick = (direction) => {
    if (direction === 'left') {
      this.setState({ startIndex: this.state.startIndex - 1 });
    } else if (direction === 'right') {
      this.setState({ startIndex: this.state.startIndex + 1 });
    }
  };

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

    let cardDisplay = this.props.data.map((post, index) => {
      if (index >= this.state.startIndex && index < this.state.startIndex + this.state.nbCard) {
        return (
          <Grid.Column width={3}>
            <Article key={post.id} id={post.id} title={post.title} date={post.creationDate} content={post.text} />
          </Grid.Column>
        );
      } else {
        return null;
      }
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
            <Grid.Row centered>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button icon="arrow left" onClick={() => this.handleClick('left')} />
              </div>
              {cardDisplay}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button icon="arrow right" onClick={() => this.handleClick('right')} />
              </div>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Source;
