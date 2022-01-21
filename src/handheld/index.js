import React from 'react';

// Components
import ComponentSelector from '../utils/ComponentSelector';
import Beer from './Beer';
import Fries from './Fries';
import IceWater from './IceWater';
import Juice from './Juice';

const componentsMap = {
  beer: Beer,
  fries: Fries,
  iceWater: IceWater,
  juice: Juice,
};

const Handheld = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="handheldType" />
);

export default Handheld;
