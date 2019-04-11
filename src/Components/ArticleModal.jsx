import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

class ModalExampleDimmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dimmer: 'blurring',
    };
  }

  close = () => {
    this.setState({ isOpen: false });
    this.props.onModalClose();
  };

  shouldComponentUpdate(nextProps, nextState) {
    let shouldCompUpdate = false;
    if (this.state.isOpen !== nextProps.isModalOpen) {
      this.setState({ isOpen: nextProps.isModalOpen });
      shouldCompUpdate = true;
    }
    return shouldCompUpdate;
  }

  componentWillMount() {
    this.setState({ isOpen: this.props.isModalOpen });
  }

  render() {
    return (
      <Modal dimmer={this.state.dimmer} open={this.state.isOpen} onClose={this.close}>
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
