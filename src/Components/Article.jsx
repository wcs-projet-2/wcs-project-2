import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';
import { Card, Responsive } from 'semantic-ui-react';
import ArticleModal from './ArticleModal.jsx';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleCardClick = () => {
    this.setState({ isModalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    let content;

    if (typeof this.props.data.postType === 'undefined') {
      content = this.props.data.text;
    } else if (this.props.data.postType === 'image') {
      content = <img src={this.props.data.thumbnail} alt="" />;
    } else if (this.props.data.postType === 'link') {
      content = (
        <div>
          <img src={this.props.data.thumbnail} alt="" />
          <p>{this.props.data.postUrl}</p>
        </div>
      );
    }

    // Card title definition
    const MAX_TITLE_LENGTH = 40;
    let cardTitle = this.props.data.title.substring(0, MAX_TITLE_LENGTH);
    if (this.props.data.title.length > MAX_TITLE_LENGTH) {
      cardTitle += '...';
    }

    const style = {
      cardContent: {
        padding: '0px',
      },
    };

    return (
      <div>
        <Responsive>
          <Card onClick={this.handleCardClick} className="cardstyle">
            <Card.Content style={style.cardContent}>
              <Card.Header className="cardHeader">
                <div className="title">{cardTitle}</div>
                <div className="date">{this.props.data.creationDate}</div>
              </Card.Header>
              <br />
              <Card.Description className="cardContent">{content}</Card.Description>
            </Card.Content>
          </Card>
          <ArticleModal isModalOpen={this.state.isModalOpen} handleModalClose={this.handleModalClose} />
        </Responsive>
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    postType: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    postUrl: PropTypes.string,
    creationDate: PropTypes.string.isRequired,
  }),
};

export default Article;
