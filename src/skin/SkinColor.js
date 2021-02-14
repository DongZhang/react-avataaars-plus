import React, { useContext } from 'react';

// Components
import Switch from '../switch/Switch';
import { AvatarContext } from '../index';

const makeColor = (name, color, maskId) => {
  const Color = () => (
    <g id='skin-color' mask={maskId}>
      <rect
        id='skin-rect'
        fill={color}
        x='0'
        y='0'
        width='264'
        height='244'
      ></rect>
    </g>
  );
  Color.displayName = name;
  // component.optionValue = name;
  return Color();
};

const Auburn = ({ maskId }) => makeColor('Auburn', '#A55728', maskId);
const Black = ({ maskId }) => makeColor('Black', '#2C1B18', maskId);
const Blonde = ({ maskId }) => makeColor('Blonde', '#B58143', maskId);

const SkinColor = ({ maskId }) => {
  const avatarConfig = useContext(AvatarContext);
  return (
    <Switch selectedValue={avatarConfig.skinColor}>
      <Auburn maskId={maskId} />
      <Black maskId={maskId} />
      <Blonde maskId={maskId} />
    </Switch>
  );
};
export default SkinColor;
