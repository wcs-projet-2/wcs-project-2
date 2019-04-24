import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const ModalExampleDimmer = ({ isModalOpen, handleModalClose, data, content }) => {
  return (
    <Modal dimmer={true} open={isModalOpen} onClose={handleModalClose}>
      <Modal.Header style={{ color: 'rgb(57,4,182)', display: 'flex', justifyContent: 'center' }}>
        <p>
          {data.title} <br />
          <span style={{ color: 'black' }}>by</span> <span style={{ textDecoration: 'underline' }}>{data.author}</span>
        </p>
      </Modal.Header>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6%', marginTop: '2%' }}>
        <Button style={{ position: 'absolute', backgroundColor: '#61dafb' }} target="blank" href={data.postUrl}>
          Go to Source
        </Button>
      </div>
      <Modal.Content>
        <div style={{ fontSize: '17px', display: 'flex', justifyContent: 'center' }}>{content}</div>
        <Modal.Description>
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '15px',
              color: 'rgb(57,4,182)',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            posted on {data.creationDate}
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button circular color="facebook" icon="facebook" href="https://facebook.com/" target="_blank" />
          <Button circular color="twitter" icon="twitter" href="https://twitter.com/" target="_blank" />
        </div>
      </Modal.Actions>
    </Modal>
  );
};

ModalExampleDimmer.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default ModalExampleDimmer;
