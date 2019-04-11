import React from 'react';
import { Card } from 'semantic-ui-react';
import './Article.css';
import ArticleModal from './ArticleModal.jsx';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <Card onClick={this.handleClick} className="cardstyle">
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Description>{this.props.date}</Card.Description>
            <hr />
            <Card.Description>{this.props.content}</Card.Description>
            {/*   Commentés car on va les utiliser seulement dans le pop-up            
              <div>
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
              </div> */}
          </Card.Content>
        </Card>
        <ArticleModal open={this.state.open} />
      </div>
    );
  }
}

export default Article;
