import React from 'react';

// Components
import Eyebrow from './eyebrows';
import Eyes from './eyes';
import Nose from './nose';
import Mouth from './mouth';

const Face = () => (
  <g id='face' fill='#000000' transform='translate(76, 82)'>
    <Eyebrow />
    <Eyes />
    <Nose />
    <Mouth />
  </g>
);

export default Face;
