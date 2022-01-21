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
import Wine from './Wine';
import Coffee from './Coffee';
import MatchaLatte from './MatchaLatte';
import Burger from './Burger';

const componentsMap = {
  beer: Beer,
  fries: Fries,
  iceWater: IceWater,
  juice: Juice,
  milk: Milk,
  iceCream: IceCream,
  tea: Tea,
  wine: Wine,
  coffee: Coffee,
  matchaLatte: MatchaLatte,
  burger: Burger,
};

const Handheld = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="handheldType" />
);

export default Handheld;
