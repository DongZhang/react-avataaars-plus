import React from 'react';

// Components
import ComponentSelector from '../utils/ComponentSelector';

const makeColor = (name, color, maskId) => {
  const Color = () => (
    <g
      id={`color-${name}`}
      mask={`url(#${maskId}`}
      fillRule="evenodd"
      fill={color}
    >
      <rect id={`color-rect-${name}`} x="0" y="0" width="264" height="110" />
    </g>
  );

  return Color();
};

const Black = ({ maskId }) => makeColor('black', '#262E33', maskId);
const Blue1 = ({ maskId }) => makeColor('blue1', '#65C9FF', maskId);
const Blue2 = ({ maskId }) => makeColor('blue2', '#5199E4', maskId);
const Blue3 = ({ maskId }) => makeColor('blue3', '#25557C', maskId);
const Grey1 = ({ maskId }) => makeColor('grey1', '#E6E6E6', maskId);
const Grey2 = ({ maskId }) => makeColor('grey2', '#929598', maskId);
const Heather = ({ maskId }) => makeColor('heather', '#3C4F5C', maskId);
const PastelBlue = ({ maskId }) => makeColor('pastelBlue', '#B1E2FF', maskId);
const PastelGreen = ({ maskId }) => makeColor('pastelGreen', '#A7FFC4', maskId);
const PastelOrange = ({ maskId }) =>
  makeColor('pastelOrange', '#FFDEB5', maskId);
const PastelRed = ({ maskId }) => makeColor('pastelRed', '#FFAFB9', maskId);
const PastelYellow = ({ maskId }) =>
  makeColor('pastelYellow', '#FFFFB1', maskId);
const Pink = ({ maskId }) => makeColor('pink', '#FF488E', maskId);
const Red = ({ maskId }) => makeColor('red', '#FF5C5C', maskId);
const White = ({ maskId }) => makeColor('white', '#FFFFFF', maskId);

const colorComponents = {
  black: Black,
  blue01: Blue1,
  blue02: Blue2,
  blue03: Blue3,
  grey01: Grey1,
  grey02: Grey2,
  heather: Heather,
  pastelBlue: PastelBlue,
  pastelGreen: PastelGreen,
  pastelOrange: PastelOrange,
  pastelRed: PastelRed,
  pastelYellow: PastelYellow,
  pink: Pink,
  red: Red,
  white: White,
};

const ClothesColor = ({ maskId }) => (
  <ComponentSelector
    componentsMap={colorComponents}
    maskId={maskId}
    optionKey="clothesColor"
  />
);

export default ClothesColor;
