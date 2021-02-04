import React from 'react';

const makeColor = (name, color, maskId) => {
  const Color = () => (
    <g
      id={`color-${name}`}
      mask={`url(#${maskId}`}
      fillRule='evenodd'
      fill={color}
    >
      <rect id={`color-rect-${name}`} x='0' y='0' width='264' height='110' />
    </g>
  );
  // const component = Color;
  // component.displayName = name;
  // component.optionValue = name;
  return Color();
};

const Blue1 = ({ maskId }) => makeColor('blue1', '#65C9FF', maskId);
const Blue2 = ({ maskId }) => makeColor('blue2', '#5199E4', maskId);

const Colors = ({ maskId }) => <Blue1 maskId={maskId} />;

export default Colors;
