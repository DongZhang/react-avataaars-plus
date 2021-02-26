import React from 'react';

// Components
import ComponentSelector from '../utils/ComponentSelector';

const makeColor = (name, color, maskId) => {
  const Color = () => (
    <g id={`skin-color-${name}`} mask={maskId}>
      <rect
        id={`skin-color-rect-${name}`}
        x="0"
        y="0"
        width="264"
        height="244"
        fill={color}
      ></rect>
    </g>
  );
  return Color();
};

const Tanned = ({ maskId }) => makeColor('Tanned', '#FD9841', maskId);
const Yellow = ({ maskId }) => makeColor('Yellow', '#F8D25C', maskId);
const Pale = ({ maskId }) => makeColor('Pale', '#FFDBB4', maskId);
const Light = ({ maskId }) => makeColor('Light', '#EDB98A', maskId);
const Brown = ({ maskId }) => makeColor('Brown', '#D08B5B', maskId);
const DarkBrown = ({ maskId }) => makeColor('DarkBrown', '#AE5D29', maskId);
const Black = ({ maskId }) => makeColor('Black', '#614335', maskId);

const colorComponents = {
  tanned: Tanned,
  yellow: Yellow,
  pale: Pale,
  light: Light,
  brown: Brown,
  darkBrown: DarkBrown,
  black: Black,
};

const SkinColor = ({ maskId }) => (
  <ComponentSelector
    componentsMap={colorComponents}
    maskId={maskId}
    optionKey="skinColor"
  />
);
export default SkinColor;
