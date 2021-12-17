import React from 'react';

// Components
import ComponentSelector from '../../utils/ComponentSelector';
import Default from './Default';
import Angry from './Angry';
import RaisedExcited from './RaisedExcited';
import Sad from './Sad';
import UpDown from './UpDown';
import AngryNatural from './AngryNatural';
import DefaultNatural from './DefaultNatural';
import FlatNatural from './FlatNatural';
import FrownNatural from './FrownNatural';
import RaisedExcitedNatural from './RaisedExcitedNatural';
import SadNatural from './SadNatural';
import UnibrowNatural from './UnibrowNatural';
import UpDownNatural from './UpDownNatural';

const componentsMap = {
  default: Default,
  angry: Angry,
  raisedExcited: RaisedExcited,
  sad: Sad,
  upDown: UpDown,
  angryNatural: AngryNatural,
  defaultNatural: DefaultNatural,
  flatNatural: FlatNatural,
  frownNatural: FrownNatural,
  raisedExcitedNatural: RaisedExcitedNatural,
  sadNatural: SadNatural,
  unibrowNatural: UnibrowNatural,
  upDownNatural: UpDownNatural,
};

const Eyebrow = () => (
  <g fillOpacity="0.6">
    <ComponentSelector componentsMap={componentsMap} optionKey="eyebrowType" />
  </g>
);

export default Eyebrow;
