import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

class ModalExampleDimmer extends Component {
  handleClose = () => {
    this.props.onModalClose();
  };

  render() {
    return (
      <Modal dimmer={true} open={this.props.isModalOpen} onClose={this.handleClose}>
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
          <Button color="black" onClick={this.handleClose}>
            Nope
          </Button>
          <Button positive icon="checkmark" labelPosition="right" content="Yep, that's me" onClick={this.handleClose} />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalExampleDimmer;
