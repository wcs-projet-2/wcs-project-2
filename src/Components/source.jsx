import React, { Component } from 'react';
import Article from './Article.jsx';
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
      currentIndex: 0,
    };
  }
  // Si on clique sur la flèche de gauche, nos cards se déplacent vers la gauche
  // Si on clique sur la flèche de droite, nos cards se déplacent vers la droite
  handleClick = (direction) => {
    if (direction === 'left') {
      this.setState({ startIndex: this.state.startIndex - 1 });
    } else if (direction === 'right') {
      this.setState({ startIndex: this.state.startIndex + 1 });
    }
  };
  // Si on fait une nouvelle recherche, nos cards index redémarrent à zéro
  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({ startIndex: this.state.startIndex === 0 });
    } else {
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
          <Grid.Column width={3} key={post.id} id={post.id}>
            <Article key={post.id} id={post.id} data={post} />
          </Grid.Column>
        );
      } else {
        return null;
      }
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
                  <Image src={icon} size="mini" />
                </Header>
                <br />
              </Grid.Row>
              <Grid.Row>
                <div className="leftArrow" width={1} style={{ display: 'flex', alignItems: 'center' }}>
                  <Button icon="arrow left" onClick={() => this.handleClick('left')} />
                </div>
                {cardDisplay}
                <div className="rightArrow" width={1} style={{ display: 'flex', alignItems: 'center' }}>
                  <Button icon="arrow right" onClick={() => this.handleClick('right')} />
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
