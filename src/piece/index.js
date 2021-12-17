import React from 'react';

// Components
import Clothes from '../clothes';
import Eyebrow from '../face/eyebrows';
import Eye from '../face/eyes';
import Mouth from '../face/mouth';
import Nose from '../face/nose';
import Top from '../top';
import Skin from '../skin';
import Face from '../face';

import AvatarContext from '../context/AvatarContext';

const Piece = ({
  type,
  value,
  pieceColorType,
  pieceColorValue,
  height = 100,
  width = 100,
  style,
}) => {
  const avatarConfig = {
    [type]: value,
    [pieceColorType]: pieceColorValue,
  };
  console.log(avatarConfig);
  const getChildrenComponent = () => {
    switch (type) {
      case 'accessoryType':
      case 'facialHairType':
      case 'topType':
        return <Top />;
      default:
        return null;
    }
  };
  return (
    <AvatarContext.Provider value={{ ...avatarConfig }}>
      <svg width={width} height={height} style={style} viewBox="0 0 264 280">
        {getChildrenComponent()}
      </svg>
    </AvatarContext.Provider>
  );
};

export default Piece;
