import React from 'react';
import './bottomBar.css';

const BottomBar = () => {
  let bottomBarStyle = {
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <footer style={bottomBarStyle.footer}>
      <p style={{ display: 'inline-block', marginBottom: '0px' }}>
        All rights reserved - © 2019 - Wild Code School - Made by : Florian Gardy, Marlene Angouillant, Amine Ben Taleb,
        Hannah Moncot.
      </p>
      <img className="img" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png" alt="react" />
      <img
        className="img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png"
        alt="JS"
      />
      <a href="https://github.com/wcs-projet-2/wcs-project-2" target="blank">
        <img className="img" src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="GitHub" />
      </a>
    </footer>
  );
};

export default BottomBar;
