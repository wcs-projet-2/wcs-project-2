import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Article.css';
import { Card, Responsive } from 'semantic-ui-react';
import ArticleModal from './ArticleModal.jsx';

const Article = ({ data }) => {
  // Declaration State key "isModalOpen"
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  let content;

  if (typeof data.postType === 'undefined') {
    content = data.text;
  } else if (data.postType === 'image') {
    content = <img src={data.thumbnail} alt="" />;
  } else if (data.postType === 'link') {
    content = (
      <div>
        <img src={data.thumbnail} alt="" />
        <p>{data.postUrl}</p>
      </div>
    );
  }

  // Card title definition
  const MAX_TITLE_LENGTH = 40;
  let cardTitle = data.title.substring(0, MAX_TITLE_LENGTH);
  if (data.title.length > MAX_TITLE_LENGTH) {
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
        <Card onClick={handleCardClick} className="cardstyle">
          <Card.Content style={style.cardContent}>
            <Card.Header className="cardHeader">
              <div className="title">{cardTitle}</div>
              <div className="date">{data.creationDate}</div>
            </Card.Header>
            <br />
            <Card.Description className="cardContent">{content}</Card.Description>
          </Card.Content>
        </Card>
        <ArticleModal isModalOpen={isModalOpen} handleModalClose={handleModalClose} />
      </Responsive>
    </div>
  );
};

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
