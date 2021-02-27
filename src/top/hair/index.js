import React from 'react';

// Components
import ComponentSelector from '../../utils/ComponentSelector';
import ShortHairDreads01 from './ShortHairDreads01';
import ShortHairDreads02 from './ShortHairDreads02';
import ShortHairFrizzle from './ShortHairFrizzle';
import ShortHairShaggy from './ShortHairShaggy';
import ShortHairShaggyMullet from './ShortHairShaggyMullet';
import ShortHairShortCurly from './ShortHairShortCurly';
import ShortHairShortFlat from './ShortHairShortFlat';
import ShortHairShortRound from './ShortHairShortRound';
import ShortHairShortWaved from './ShortHairShortWaved';
import ShortHairSides from './ShortHairSides';
import ShortHairTheCaesar from './ShortHairTheCaesar';
import ShortHairTheCaesarWithSidePart from './ShortHairTheCaesarWithSidePart';
import LongHairBigHair from './LongHairBigHair';
import LongHairCurvy from './LongHairCurvy';
import LongHairDreads from './LongHairDreads';
import LongHairFrida from './LongHairFrida';
import LongHairFro from './LongHairFro';
import LongHairFroBand from './LongHairFroBand';
import LongHairLongButNotTooLong from './LongHairLongButNotTooLong';
import LongHairMiaWallace from './LongHairMiaWallace';
import LongHairShavedSides from './LongHairShavedSides';
import LongHairStraight01 from './LongHairStraight01';
import LongHairStraight02 from './LongHairStraight02';
import LongHairStraightStrand from './LongHairStraightStrand';
import NoHair from './NoHair';

const componentsMap = {
  shortHairDreads01: ShortHairDreads01,
  shortHairDreads02: ShortHairDreads02,
  shortHairFrizzle: ShortHairFrizzle,
  shortHairShaggy: ShortHairShaggy,
  shortHairShaggyMullet: ShortHairShaggyMullet,
  shortHairShortCurly: ShortHairShortCurly,
  shortHairShortFlat: ShortHairShortFlat,
  shortHairShortRound: ShortHairShortRound,
  shortHairShortWaved: ShortHairShortWaved,
  shortHairSides: ShortHairSides,
  shortHairTheCaesar: ShortHairTheCaesar,
  shortHairTheCaesarWithSidePart: ShortHairTheCaesarWithSidePart,
  longHairBigHair: LongHairBigHair,
  longHairCurvy: LongHairCurvy,
  longHairDreads: LongHairDreads,
  longHairFrida: LongHairFrida,
  longHairFro: LongHairFro,
  longHairFroBand: LongHairFroBand,
  longHairLongButNotTooLong: LongHairLongButNotTooLong,
  longHairMiaWallace: LongHairMiaWallace,
  longHairShavedSides: LongHairShavedSides,
  longHairStraight01: LongHairStraight01,
  longHairStraight02: LongHairStraight02,
  longHairStraightStrand: LongHairStraightStrand,
  noHair: NoHair,
};

const Hair = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="topType" />
);

export default Hair;
