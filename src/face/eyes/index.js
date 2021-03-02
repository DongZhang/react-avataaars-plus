import React from 'react';

// Components
import ComponentSelector from '../../utils/ComponentSelector';
import Default from './Default';
import Closed from './Closed';
import Cry from './Cry';
import EyeRoll from './EyeRoll';
import Happy from './Happy';
import Hearts from './Hearts';
import Side from './Side';
import Squint from './Squint';
import Surprised from './Surprised';
import WinkWacky from './WinkWacky';
import Wink from './Wink';
import Dizzy from './Dizzy';

const componentsMap = {
  default: Default,
  closed: Closed,
  cry: Cry,
  eyeRoll: EyeRoll,
  happy: Happy,
  hearts: Hearts,
  side: Side,
  squint: Squint,
  surprised: Surprised,
  winkWacky: WinkWacky,
  wink: Wink,
  dizzy: Dizzy,
};

const Eyes = () => (
  <g transform="translate(0, 8)">
    <ComponentSelector componentsMap={componentsMap} optionKey="eyeType" />
  </g>
);

export default Eyes;
