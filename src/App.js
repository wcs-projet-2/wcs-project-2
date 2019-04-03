import React, { Component } from 'react';
import './App.css';
import TopBar from './Components/topBar';
import Content from './Components/content';
import BottomBar from './Components/bottomBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Button, Icon, Label } from 'semantic-ui-react';

library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Content />
        <BottomBar />
        <FontAwesomeIcon icon="igloo" />
        <div class="ui input">
          <input type="text" placeholder="Search..." />
        </div>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
            strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
            felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
            justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
        </Container>
        <Button as="div" labelPosition="right">
          <Button color="red">
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic color="red" pointing="left">
            2,048
          </Label>
        </Button>
        <Button as="div" labelPosition="right">
          <Button basic color="blue">
            <Icon name="fork" />
            Fork
          </Button>
          <Label as="a" basic color="blue" pointing="left">
            2,048
          </Label>
        </Button>
      </div>
    );
  }
}

export default App;
