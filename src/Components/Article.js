import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import './Article.css';
import ArticleModal from './ArticleModal.jsx';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ isModalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div>
        <Card.Group>
          <Card onClick={this.handleClick}>
            <Card.Content>
              <Card.Header>{this.props.title}</Card.Header>
              <Card.Description>{this.props.date}</Card.Description>
              <Card.Description>{this.props.content}</Card.Description>
              <div>
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
        <ArticleModal isModalOpen={this.state.isModalOpen} onModalClose={this.handleModalClose} />
      </div>
    );
  }
}

export default Article;
