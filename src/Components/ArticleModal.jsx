import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const ModalExampleDimmer = ({ isModalOpen, handleModalClose }) => {
  return (
    <Modal dimmer={true} open={isModalOpen} onClose={handleModalClose}>
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
        <Button color="black" onClick={handleModalClose}>
          Nope
        </Button>
        <Button positive icon="checkmark" labelPosition="right" content="Yep, that's me" onClick={handleModalClose} />
      </Modal.Actions>
    </Modal>
  );
};

ModalExampleDimmer.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default ModalExampleDimmer;
