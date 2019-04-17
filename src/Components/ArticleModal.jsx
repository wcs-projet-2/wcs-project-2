import React, { Component } from 'react';
import './ArticleModal.css';
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
        <Modal.Header className="Header">
          {this.props.data.title} by <span className="author">{this.props.data.author}</span>
          <Button className="source" target="blank" href={this.props.data.postUrl}>
            Source
          </Button>
        </Modal.Header>
        <Modal.Content className="content">
          {content}
          <Modal.Description className="description">{this.props.data.creationDate}</Modal.Description>
        </Modal.Content>
        <Modal.Actions className="button">
          <div>
            <Button circular color="facebook" icon="facebook" />
            <Button circular color="twitter" icon="twitter" />
          </div>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalExampleDimmer;
