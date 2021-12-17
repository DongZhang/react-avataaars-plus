import React from 'react';

// Components
import Hair from './hair';
import Accessory from './accessory';
import FacialHair from './facialHair';

const Face = () => (
  <g>
    <FacialHair />
    <Accessory />
    <Hair />
  </g>
);

export default Face;
