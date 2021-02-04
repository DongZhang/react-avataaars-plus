import React from 'react';

const makeColor = (name, color, maskId) => {
  const Color = () => (
    <g id='Color' mask={`url(${maskId}`} fillRule='evenodd' fill={color}>
      <rect id='Color' x='0' y='0' width='264' height='110' />
    </g>
  );
  const component = Color;
  component.displayName = name;
  component.optionValue = name;
  return component;
};

const Blue1 = ({ maskId }) => {
  return (
    <g id='Color' mask={`url(#${maskId}`} fillRule='evenodd' fill='#65C9FF'>
      <rect id='Color' x='0' y='0' width='264' height='110' />
    </g>
  );

  // return makeColor('Blue1', '#65C9FF', maskId)
};

const Colors = ({ maskId }) => <Blue1 maskId={maskId} />;

export default Colors;
