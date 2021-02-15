import React, { useContext } from 'react';

// Components
import { AvatarContext, DEFAULT_AVATAR_CONFIG } from '../index';

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
  Color.defaultProps = { name };
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

const SkinColor = ({ maskId }) => {
  const avatarConfig = useContext(AvatarContext);
  let { skinColor } = avatarConfig;
  if (
    !avatarConfig.skinColor ||
    !colorComponents.hasOwnProperty(avatarConfig.skinColor)
  ) {
    console.error(`${avatarConfig.skinColor} is not a valid skin color option`);
    skinColor = DEFAULT_AVATAR_CONFIG.skinColor;
  }

  const Color = colorComponents[skinColor];

  return <Color maskId={maskId} />;
};
export default SkinColor;
