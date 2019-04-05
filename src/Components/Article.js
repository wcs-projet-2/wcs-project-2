// import React from 'react';
// import { Card } from 'semantic-ui-react';
// import './Article.css';

// let items = [
//   {
//     header: '#Test 1',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'red',
//   },
//   {
//     header: '#Test 2',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'red',
//   },
//   {
//     header: '#Test 3',
//     description:
//       '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'red',
//   },
//   {
//     header: '#Test 4',
//     description:
//       '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'red',
//   },
//   {
//     header: '#Test 5',
//     description:
//       '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'red',
//   },

//   {
//     header: '#Test 1',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'blue',
//   },
//   {
//     header: '#Test 2',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'blue',
//   },
//   {
//     header: '#Test 3',
//     description:
//       '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'blue',
//   },
//   {
//     header: '#Test 4',
//     description:
//       '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'blue',
//   },
//   {
//     header: '#Test 5',
//     description:
//       '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'blue',
//   },

//   {
//     header: '#Test 1',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'green',
//   },
//   {
//     header: '#Test 2',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'green',
//   },
//   {
//     header: '#Test 3',
//     description:
//       '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'green',
//   },
//   {
//     header: '#Test 4',
//     description:
//       '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'green',
//   },
//   {
//     header: '#Test 5',
//     description:
//       '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     color: 'green',
//   },
// ];

// let CardExampleGroupProps = () => <Card.Group items={items} />;

// export default CardExampleGroupProps;

import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import './Article.css';

const Article = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>#Test1</Card.Header>
        <Card.Meta>Date</Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Card.Description>
        <div>
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
);
export default Article;
