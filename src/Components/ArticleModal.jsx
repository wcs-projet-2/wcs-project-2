import React, { Component } from 'react';
import { Button, Image, Modal, Embed } from 'semantic-ui-react';

class ModalExampleDimmer extends Component {
  render() {
    console.log(this.props.data.postType);
    console.log(this.props.data.mediaSrc);

    let content;

    let vidUrl;
    if (this.props.data.postType === 'rich:video') {
      if (this.props.data.mediaSrc.includes('youtu')) {
        vidUrl = this.props.data.mediaSrc.replace('watch?v=', 'embed/');
      }
    } else if (this.props.data.postType === 'hosted:video') {
      vidUrl = this.props.data.mediaSrc;
    }

    if (typeof this.props.data.postType === 'undefined') {
      content = this.props.data.text;
    } else if (this.props.data.postType === 'image') {
      content = <Image src={this.props.data.mediaSrc} alt="img" />;
    } else if (this.props.data.postType === 'link' || 'rich:video') {
      content = (
        <div>
          <Embed placeholder={this.props.data.thumbnail} url={vidUrl} />
        </div>
      );
    }

    return (
      <Modal dimmer={true} open={this.props.isModalOpen} onClose={this.props.onModalClose}>
        <Modal.Header>
          {this.props.data.title} by {this.props.data.author}
        </Modal.Header>
        <Modal.Content>
          {content}
          <Modal.Description style={{ fontWeight: 'bold' }}>{this.props.data.creationDate}</Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={this.props.onModalClose}>
            Nope
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yep, that's me"
            onClick={this.props.onModalClose}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalExampleDimmer;
