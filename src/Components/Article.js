import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import './Article.css';

const Article = (props) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.date}</Card.Description>
        <Card.Description>{props.content}</Card.Description>
        <div>
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
);
export default Article;
