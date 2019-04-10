import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

class ModalExampleDimmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dimmer: true,
    };
  }

  show = (dimmer) => this.setState({ dimmer, open: true });

  close = () => this.setState({ open: false });

  componentWillReceiveProps() {
    this.show('blurring');
  }

  render() {
    return (
      <Modal dimmer={this.state.dimmer} open={this.state.open} onClose={this.close}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src="https://react.semantic-ui.com/images/avatar/large/rachel.png" />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={this.close}>
            Nope
          </Button>
          <Button positive icon="checkmark" labelPosition="right" content="Yep, that's me" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalExampleDimmer;
