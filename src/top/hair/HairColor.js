import React from 'react';

// Components
import ComponentSelector from '../../utils/ComponentSelector';

const makeColor = (name, color, maskId) => {
  const Color = () => (
    <g id={`hair-color-${name}`} mask={`url(#${maskId}`}>
      <rect
        id={`hair-color-rect-${name}`}
        x="0"
        y="0"
        width="264"
        height="280"
        fill={color}
      />
    </g>
  );

  return Color();
};

const Auburn = ({ maskId }) => makeColor('Auburn', '#A55728', maskId);
const Black = ({ maskId }) => makeColor('Black', '#2C1B18', maskId);
const Blonde = ({ maskId }) => makeColor('Blonde', '#B58143', maskId);
const BlondeGolden = ({ maskId }) =>
  makeColor('BlondeGolden', '#D6B370', maskId);
const Brown = ({ maskId }) => makeColor('Brown', '#724133', maskId);
const DarkBrown = ({ maskId }) => makeColor('DarkBrown', '#4A312C', maskId);
const PastelPink = ({ maskId }) => makeColor('PastelPink', '#F59797', maskId);
const Platinum = ({ maskId }) => makeColor('Platinum', '#ECDCBF', maskId);
const Red = ({ maskId }) => makeColor('Red', '#C93305', maskId);
const Silver = ({ maskId }) => makeColor('Silver', '#E8E1E1', maskId);

const colorComponents = {
  auburn: Auburn,
  black: Black,
  blonde: Blonde,
  blondeGolden: BlondeGolden,
  brown: Brown,
  darkBrown: DarkBrown,
  pastelPink: PastelPink,
  platinum: Platinum,
  red: Red,
  silver: Silver,
};

const HairColor = ({ maskId }) => (
  <ComponentSelector
    componentsMap={colorComponents}
    maskId={maskId}
    optionKey="hairColor"
  />
);

export default HairColor;
