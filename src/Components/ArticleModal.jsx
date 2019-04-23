import React, { Component } from 'react';
import { Button, Image, Modal, Embed } from 'semantic-ui-react';

class ModalExampleDimmer extends Component {
  render() {
    console.log(this.props.data.postType);
    console.log(this.props.data.mediaSrc);

    let content;

    // displays youtube videos correctly.
    let vidUrl;
    if (this.props.data.postType === 'rich:video') {
      if (this.props.data.mediaSrc.includes('youtube')) {
        vidUrl = this.props.data.mediaSrc.replace('watch?v=', 'embed/');
      } else if (this.props.data.mediaSrc.includes('youtu.be')) {
        vidUrl = this.props.data.mediaSrc.replace('youtu.be', 'youtube.com/embed/');
      } else {
        vidUrl = this.props.data.mediaSrc;
      }
    }

    if (typeof this.props.data.postType === 'undefined') {
      content = this.props.data.text;
    } else if (this.props.data.postType === 'image') {
      content = <Image src={this.props.data.mediaSrc} alt="img" />;
    }
    // if the video isn't from youtube, displays the link to the video.
    else if (this.props.data.postType === 'rich:video') {
      if (this.props.data.mediaSrc.includes('youtu')) {
        content = (
          <div>
            <Embed placeholder={this.props.data.thumbnail} url={vidUrl} />
          </div>
        );
      } else {
        content = (
          <a target="blank" href={this.props.data.mediaSrc}>
            {this.props.data.mediaSrc}
          </a>
        );
      }
    } else if (this.props.data.postType === 'link' || 'hosted:video') {
      content = (
        <a target="blank" href={this.props.data.mediaSrc}>
          {this.props.data.mediaSrc}
        </a>
      );
    }

    return (
      <Modal dimmer={true} open={this.props.isModalOpen} onClose={this.props.onModalClose}>
        <Modal.Header style={{ color: 'rgb(57,4,182)', display: 'flex', justifyContent: 'center' }}>
          {this.props.data.title} <span style={{ color: 'black' }}>by</span>{' '}
          <span style={{ textDecoration: 'underline' }}>{this.props.data.author}</span>
        </Modal.Header>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6%', marginTop: '1,5%' }}>
          <Button
            style={{ position: 'absolute', backgroundColor: '#61dafb' }}
            target="blank"
            href={this.props.data.postUrl}
          >
            Go to Source
          </Button>
        </div>
        <Modal.Content style={{ fontSize: '17px' }}>
          {content}
          <Modal.Description style={{ fontWeight: 'bold', fontSize: '15px', color: 'rgb(57,4,182)' }}>
            {this.props.data.creationDate}
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
  }
}

export default ModalExampleDimmer;
