import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Article.css';
import ArticleModal from './ArticleModal.jsx';

const Article = (props) => {
  // Declaration State key "isModalOpen"
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  let content;

  if (typeof props.data.postType === 'undefined') {
    content = props.data.text;
  } else if (props.data.postType === 'image') {
    content = <img src={props.data.thumbnail} alt="" />;
  } else if (props.data.postType === 'link') {
    content = (
      <div>
        <img src={props.data.thumbnail} alt="" />
        <p>{props.data.postUrl}</p>
      </div>
    );
  }

  // Card title definition
  const MAX_TITLE_LENGTH = 20;
  let cardTitle = props.data.title.substring(0, MAX_TITLE_LENGTH);
  if (props.data.title.length > MAX_TITLE_LENGTH) {
    cardTitle += '...';
  }

  return (
    <div>
      <Card onClick={handleCardClick} className="cardstyle">
        <Card.Content>
          <Card.Header className="title">{cardTitle}</Card.Header>
          <Card.Description className="description">{props.data.creationDate}</Card.Description>
          <hr />
          <Card.Description>{content}</Card.Description>
          {/*   Commentés car on va les utiliser seulement dans le pop-up            
              <div>
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
              </div> */}
        </Card.Content>
      </Card>
      <ArticleModal isModalOpen={isModalOpen} handleModalClose={handleModalClose} />
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
