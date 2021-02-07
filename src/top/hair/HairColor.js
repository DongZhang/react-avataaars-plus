import React from 'react';

const makeColor = (name, color, maskId) => {
  const Color = () => (
    <g
      id={`color-${name}`}
      mask={`url(#${maskId}`}
      fillRule='evenodd'
      fill={color}
    >
      <rect id={`color-rect-${name}`} x='0' y='0' width='264' height='280' />
    </g>
  );

  return Color();
};

const Auburn = ({ maskId }) => makeColor('blue1', '#A55728', maskId);
const Black = ({ maskId }) => makeColor('blue2', '#2C1B18', maskId);

const HairColor = ({ maskId }) => <Black maskId={maskId} />;

export default HairColor;
