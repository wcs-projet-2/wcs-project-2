import React from 'react';
import { Input, Icon, Checkbox, Image, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import logo from '../assets/images/Logo.png';

const TopBar = ({ keyWord, sourceToggles, handleToggle, handleChange, handleClick }) => {
  let topBarStyle = {
    main: {
      backgroundColor: 'white',
      borderBottom: '1px solid blue',
      position: 'sticky',
      top: '0',
      zIndex: '9',
      padding: '20px',
    },
    grid: {
      margin: '0px',
    },
    mainRow: {
      padding: '0 0 0 0',
    },
    colLogo: {
      padding: '0 0 0 0px',
    },
    image: {
      maxHeight: '10vh',
    },
    colInput: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
    },
    input: {
      width: '60vw',
    },
    rowCheckboxes: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10px',
    },
    checkBoxGroup: {
      padding: '0 1.5vw 0 1.5vw',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      height: '100%',
    },
    checkBox: {
      size: '50%',
    },
  };

  return (
    <div style={topBarStyle.main}>
      <Grid style={topBarStyle.grid}>
        <Grid.Row columns={1} style={topBarStyle.mainRow}>
          <Grid.Column mobile={4} tablet={2} computer={2} style={topBarStyle.colLogo}>
            <Image id="image" onClick={() => (window.location = '/')} src={logo} alt="logo" style={topBarStyle.image} />
          </Grid.Column>
          <Grid.Column mobile={12} tablet={14} computer={14} style={topBarStyle.colInput}>
            <Grid.Row columns={2}>
              <Input
                style={topBarStyle.input}
                placeholder="Search..."
                icon={{ name: 'search', circular: true, link: true, onClick: () => handleClick() }}
                value={keyWord}
                onChange={handleChange}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleClick();
                  }
                }}
              />
            </Grid.Row>
            <Grid.Row columns={3} style={topBarStyle.rowCheckboxes}>
              <Grid.Column style={topBarStyle.checkBoxGroup}>
                <Icon className="twitter" color="blue" style={topBarStyle.icon} />
                <Checkbox toggle checked={sourceToggles.twitter} onChange={() => handleToggle('twitter')} />
              </Grid.Column>
              <Grid.Column style={topBarStyle.checkBoxGroup}>
                <Icon className="reddit alien" color="red" style={topBarStyle.icon} />
                <Checkbox toggle checked={sourceToggles.reddit} onChange={() => handleToggle('reddit')} />
              </Grid.Column>
              <Grid.Column style={topBarStyle.checkBoxGroup}>
                <Icon className="moon" color="green" style={topBarStyle.icon} />
                <Checkbox
                  toggle
                  checked={sourceToggles.hacker}
                  onChange={() => handleToggle('hacker')}
                  style={topBarStyle.checkBox}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

TopBar.propTypes = {
  keyWord: PropTypes.string.isRequired,
  sourceToggles: PropTypes.shape({
    twitter: PropTypes.bool.isRequired,
    reddit: PropTypes.bool.isRequired,
    hacker: PropTypes.bool.isRequired,
  }),
  handleToggle: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TopBar;
