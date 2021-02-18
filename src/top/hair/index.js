import React from 'react';

// Components
import ComponentSelector from '../../utils/ComponentSelector';
import ShortHairDreads01 from './ShortHairDreads01';
import ShortHairDreads02 from './ShortHairDreads02';
import Frizzle from './Frizzle';
import Shaggy from './Shaggy';
import ShaggyMullet from './ShaggyMullet';
import ShortCurly from './ShortCurly';
import ShortFlat from './ShortFlat';
import ShortRound from './ShortRound';
import ShortWaved from './ShortWaved';
import Sides from './Sides';
import TheCaesar from './TheCaesar';
import TheCaesarWithSidePart from './TheCaesarWithSidePart';

const componentsMap = {
  shortHairDreads01: ShortHairDreads01,
  shortHairDreads02: ShortHairDreads02,
  frizzle: Frizzle,
  shaggy: Shaggy,
  shaggyMullet: ShaggyMullet,
  shortCurly: ShortCurly,
  shortFlat: ShortFlat,
  shortRound: ShortRound,
  shortWaved: ShortWaved,
  sides: Sides,
  theCaesar: TheCaesar,
  theCaesarWithSidePart: TheCaesarWithSidePart,
};

const Hair = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="topType" />
);

export default Hair;
