import React, { useState, useEffect } from 'react';
import { Grid, Header, Container, Image, Button, Responsive } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Article from './Article.jsx';
import styles from './source.module.css';
import HackerNoon from '../assets/images/HackerNoon.png';
import reddit from '../assets/images/reddit.png';
import twitter from '../assets/images/twitter.png';

const Source = ({ source, data }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToBeDisplayed, setCardsToBeDisplayed] = useState([]);
  //const [nbCard, setNbCard] = useState(4); // To be used once responsivity will be put in place

  //Display a number of card according to the window width
  let displayNbCard = () => {
    if (window.innerWidth >= 1440) {
      return 4;
    }
    if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
      return 3;
    }
    if (window.innerWidth >= 650 && window.innerWidth < 1024) {
      return 2;
    }
    if (window.innerWidth >= 320 && window.innerWidth <= 650) {
      return 1;
    } else {
      return 1;
    }
  };

  // Si on clique sur la flèche de gauche, nos cards se déplacent vers la gauche
  const handleClickArrow = (direction) => {
    if (direction === 'left') {
      setStartIndex(
        (((startIndex - 1) % data.length) + data.length) % data.length
        // https://dev.to/maurobringolf/a-neat-trick-to-compute-modulo-of-negative-numbers-111e
      );
    } else if (direction === 'right') {
      setStartIndex((startIndex + 1) % data.length);
    }
  };

  // This section is launched each time the component is mounted or updated
  useEffect(() => {
    // Update state.cardsToBeDisplayed according to state.startIndex
    let finalArray = [];
    if (data.length > 0) {
      let currentIndex = startIndex;
      for (let i = 0; i < displayNbCard(); i++) {
        finalArray.push(data[currentIndex++ % data.length]);
      }
      setCardsToBeDisplayed(finalArray);
    }
  });

  let title = source;
  let iconName = source;
  let icon;

  if (iconName === 'twitter') {
    icon = twitter;
  } else if (iconName === 'reddit') {
    icon = reddit;
  } else if (iconName === 'hacker noon') {
    icon = HackerNoon;
  }

  let cardDisplay = cardsToBeDisplayed.map((post) => {
    return (
      <Grid.Column width={12 / displayNbCard()} key={post.id} id={post.id}>
        <Article key={post.id} id={post.id} data={post} />
      </Grid.Column>
    );
  });

  return (
    <Responsive>
      <Container fluid>
        <Grid>
          <Grid.Row style={{ marginTop: '40px' }}>
            <Header as="h3" style={{ textTransform: 'uppercase', margin: 'auto' }}>
              {title}
              <Image className={styles.imageIcon} src={icon} size="mini" />
            </Header>
            <br />
          </Grid.Row>
          <Grid.Row centered>
            <div className={styles.leftArrow} width={1}>
              <Button icon="arrow left" onClick={() => handleClickArrow('left')} />
            </div>
            {cardDisplay}
            <div className={styles.rightArrow} width={1}>
              <Button icon="arrow right" onClick={() => handleClickArrow('right')} />
            </div>
          </Grid.Row>
        </Grid>
      </Container>
    </Responsive>
  );
};

Source.propTypes = {
  source: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Source;
