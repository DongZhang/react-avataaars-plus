import React, { useContext } from 'react';

// Components
import Switch from '../../switch/Switch';
import { AvatarContext } from '../../index';

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

  Color.displayName = name;
  Color.optionValue = name;
  return Color();
};

const Auburn = ({ maskId }) => makeColor('Auburn', '#A55728', maskId);
const Black = ({ maskId }) => makeColor('Black', '#2C1B18', maskId);
const Blonde = ({ maskId }) => makeColor('Blonde', '#B58143', maskId);
const BlondeGolden = ({ maskId }) =>
  makeColor('BlondeGolden', '#D6B370', maskId);
const Brown = ({ maskId }) => makeColor('Brown', '#724133', maskId);
const BrownDark = ({ maskId }) => makeColor('BrownDark', '#4A312C', maskId);
const PastelPink = ({ maskId }) => makeColor('PastelPink', '#F59797', maskId);
const Platinum = ({ maskId }) => makeColor('Platinum', '#ECDCBF', maskId);
const Red = ({ maskId }) => makeColor('Red', '#C93305', maskId);
const Silver = ({ maskId }) => makeColor('Silver', '#E8E1E1', maskId);

const HairColor = ({ maskId }) => {
  const avatarConfig = useContext(AvatarContext);
  return (
    <Switch selectedValue={avatarConfig.hairColor}>
      <Auburn maskId={maskId} />
      <Black maskId={maskId} />
      <Blonde maskId={maskId} />
      <BlondeGolden maskId={maskId} />
      <Brown maskId={maskId} />
      <BrownDark maskId={maskId} />
      <PastelPink maskId={maskId} />
      <Platinum maskId={maskId} />
      <Red maskId={maskId} />
      <Silver maskId={maskId} />
    </Switch>
  );
};
export default HairColor;
