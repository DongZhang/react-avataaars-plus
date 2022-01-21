import React from 'react';

// Components
import ComponentSelector from '../utils/ComponentSelector';
import Beer from './Beer';
import Fries from './Fries';
import IceWater from './IceWater';
import Juice from './Juice';
import Milk from './Milk';
import IceCream from './IceCream';
import Tea from './Tea';

const componentsMap = {
  beer: Beer,
  fries: Fries,
  iceWater: IceWater,
  juice: Juice,
  milk: Milk,
  iceCream: IceCream,
  tea: Tea,
};

const Handheld = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="handheldType" />
);

export default Handheld;
