import React from 'react';
import './bottomBar.css';
import { Responsive } from 'semantic-ui-react';

const BottomBar = () => {
  return (
    <Responsive minWidth={320} maxWidth={2580}>
      <footer>
        <p>
          All rights reserved - © 2019 - Wild Code School - Made by : Florian Gardy, Marlene Angouillant, Amine Ben
          Taleb, Hannah Moncot.
        </p>
      </footer>
    </Responsive>
  );
};

export default BottomBar;
