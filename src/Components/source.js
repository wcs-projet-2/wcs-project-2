import React, { Component } from 'react';
import { Grid, Container, Header, Icon } from 'semantic-ui-react';
import './source.css';

class Source extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Container fluid>
              <Header as="h3" textAlign="left">
                {' '}
                Twitter <Icon name="twitter" color="blue" />{' '}
              </Header>
              <p>Cards</p>
            </Container>
          </Grid.Row>
          <Grid.Row>
            <Container fluid>
              <Header as="h3" textAlign="left">
                {' '}
                Reddit <Icon name="reddit alien" color="red" />{' '}
              </Header>
              <p>Cards</p>
            </Container>
          </Grid.Row>
          <Grid.Row>
            <Container fluid>
              <Header as="h3" textAlign="left">
                {' '}
                The Hacker news <Icon name="hacker news" color="green" />{' '}
              </Header>
              <p>Cards</p>
            </Container>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Source;
