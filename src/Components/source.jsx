import React, { Component } from 'react';
import Article from './Article.jsx';
import { Grid, Header, Container, Image, Button, Responsive } from 'semantic-ui-react';
import './source.css';
import HackerNoon from '../assets/images/HackerNoon.png';
import reddit from '../assets/images/reddit.png';
import twitter from '../assets/images/twitter.png';

class Source extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      nbCard: 4,
      cardsToBeDisplayed: [],
    };
  }

  // Si on clique sur la flèche de gauche, nos cards se déplacent vers la gauche
  handleClickArrow = (direction) => {
    if (direction === 'left') {
      this.setState({
        startIndex:
          (((this.state.startIndex - 1) % this.props.data.length) + this.props.data.length) % this.props.data.length,
        // https://dev.to/maurobringolf/a-neat-trick-to-compute-modulo-of-negative-numbers-111e
      });
    } else if (direction === 'right') {
      this.setState({ startIndex: (this.state.startIndex + 1) % this.props.data.length });
    }
  };

  static getDerivedStateFromProps(props, state) {
    // Update state.cardsToBeDisplayed according to state.startIndex
    let finalArray = [];
    if (props.data.length > 0) {
      let currentIndex = state.startIndex;
      for (let i = 0; i < state.nbCard; i++) {
        finalArray.push(props.data[currentIndex++ % props.data.length]);
      }
    }
    return { cardsToBeDisplayed: finalArray };
  }

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

    let cardDisplay = this.state.cardsToBeDisplayed.map((post) => {
      return (
        <Grid.Column width={3} key={post.id} id={post.id}>
          <Article key={post.id} id={post.id} data={post} />
        </Grid.Column>
      );
    });

    return (
      <div>
        <br />
        <Responsive>
          <Container fluid className="source">
            <Grid>
              <Grid.Row>
                <Header as="h3" textAlign="left" style={{ textTransform: 'uppercase' }}>
                  {title}
                  <Image className="imageIcon" src={icon} size="mini" />
                </Header>
                <br />
              </Grid.Row>
              <Grid.Row>
                <div className="leftArrow" width={1}>
                  <Button icon="arrow left" onClick={() => this.handleClickArrow('left')} />
                </div>
                {cardDisplay}
                <div className="rightArrow" width={1}>
                  <Button icon="arrow right" onClick={() => this.handleClickArrow('right')} />
                </div>
              </Grid.Row>
            </Grid>
          </Container>
        </Responsive>
      </div>
    );
  }
}

export default Source;
