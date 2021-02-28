import React from 'react';

// Components
import ComponentSelector from '../../utils/ComponentSelector';
import Default from './Default';
import Concerned from './Concerned';
import Disbelief from './Disbelief';
import Eating from './Eating';
import Grimace from './Grimace';
import Sad from './Sad';
import Scream from './Scream';

const componentsMap = {
  default: Default,
  concerned: Concerned,
  disbelief: Disbelief,
  eating: Eating,
  grimace: Grimace,
  sad: Sad,
  scream: Scream,
};
const Mouth = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="mouthType" />
);

export default Mouth;
