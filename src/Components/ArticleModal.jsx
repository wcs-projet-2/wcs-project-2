import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Embed, Image, Responsive } from 'semantic-ui-react';

const ArticleModal = ({ isModalOpen, handleModalClose, data }) => {
  let content;

  // displays youtube videos correctly.
  let vidUrl;
  if (data.postType === 'rich:video') {
    if (data.mediaSrc.includes('youtube')) {
      vidUrl = data.mediaSrc.replace('watch?v=', 'embed/');
    } else if (data.mediaSrc.includes('youtu.be')) {
      vidUrl = data.mediaSrc.replace('youtu.be', 'youtube.com/embed/');
    } else {
      vidUrl = data.mediaSrc;
    }
  }

  if (typeof data.postType === 'undefined') {
    content = data.text;
  } else if (data.postType === 'self') {
    content = data.text;
  } else if (data.postType === 'image') {
    content = <Image src={data.mediaSrc} alt="img" />;
  }
  // if the video isn't from youtube, displays the link to the video.
  else if (data.postType === 'rich:video') {
    if (data.mediaSrc.includes('youtu')) {
      content = (
        <div>
          <Embed placeholder={data.thumbnail} url={vidUrl} />
        </div>
      );
    } else {
      content = (
        <a target="blank" href={data.postUrl}>
          {data.postUrl}
        </a>
      );
    }
  } else if (data.postType === 'link' || 'hosted:video') {
    content = (
      <div>
        <a target="blank" href={data.postUrl}>
          {data.postUrl}
        </a>
      </div>
    );
  }

  return (
    <Responsive>
      <Modal dimmer={true} open={isModalOpen} onClose={handleModalClose}>
        <Modal.Header style={{ fontWeight: 'normal', color: 'rgb(57,4,182)' }}>
          <div>
            <button
              style={{ backgroundColor: 'white', border: 'none', color: 'rgb(150,150,150)', float: 'right' }}
              onClick={handleModalClose}
            >
              X
            </button>
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>{data.title}</span> <br />
            <span style={{ color: 'black' }}>submitted on </span> {data.creationDate}
            <span style={{ color: 'black' }}> by </span>
            <span style={{ fontStyle: 'italic' }}>{data.author}</span>
          </div>
        </Modal.Header>
        <Modal.Content className="content" style={{ overflowY: 'auto' }}>
          <div style={{ fontSize: '20px', margin: 'auto' }}>{content}</div>
        </Modal.Content>
        <Modal.Actions>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={{ backgroundColor: '#61dafb' }} target="blank" href={data.postUrl}>
              Go to Source
            </Button>
            <Button circular color="facebook" icon="facebook" href="https://facebook.com/" target="_blank" />
            <Button circular color="twitter" icon="twitter" href="https://twitter.com/" target="_blank" />
          </div>
        </Modal.Actions>
      </Modal>
    </Responsive>
  );
};

ArticleModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default ArticleModal;
