import React, { Component } from 'react';
// import Article from './article';
import { Grid, Container, Header, Icon } from 'semantic-ui-react';
import './source.css';

class Source extends Component {
  render() {
    let title = this.props.source;
    let iconName = this.props.source;
    let iconColor;

    if (iconName === 'Twitter') {
      iconColor = 'blue';
    } else if (iconName === 'Reddit') {
      iconColor = 'red';
    } else if (iconName === 'Hacker') {
      iconColor = 'green';
    }

    return (
      <div>
        <Grid>
          <Grid.Row>
            {/* <Container fluid> */}
            <Header as="h3" textAlign="left">
              <Icon name={iconName} color={iconColor} />
            </Header>
            <p> {title} </p>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>Article HERE</Grid.Column>
            <Grid.Column width={3}>Article HERE</Grid.Column>
            <Grid.Column width={3}>Article HERE</Grid.Column>
            <Grid.Column width={3}>Article HERE</Grid.Column>
            {/* </Container> */}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Source;
