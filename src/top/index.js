import React from 'react';

// Components
import Hair from './hair';
import Accessory from './accessory';
import FacialHair from './facialHair';

const Face = () => (
  <g>
    <Accessory />
    <Hair />
    <FacialHair />
  </g>
);

export default Face;
