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
import HairColor from '../top/hair/HairColor';
import AvatarContext from '../context/AvatarContext';
import SkinColor from '../skin/SkinColor';
import FacialHairColor from '../top/facialHair/FacialHairColor';
import ClothesColor from '../clothes/ClothesColor';

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
  const getChildrenComponent = () => {
    switch (type) {
      case 'accessoryType':
      case 'facialHairType':
      case 'topType':
        return <Top />;
      case 'hairColor':
        return <HairColor />;
      case 'facialHairColor':
        return <FacialHairColor />;
      case 'skinColor':
        return <SkinColor />;
      case 'eyebrowType':
        return <Eyebrow />;
      case 'mouthType':
        return <Mouth />;
      case 'eyeType':
        return <Eye />;
      case 'eyebrowType':
        return <Eyebrow />;
      case 'clothesType':
        return <Clothes />;
      case 'clothesColor':
        return <ClothesColor />;
      default:
        return null;
    }
  };
  return (
    <AvatarContext.Provider value={{ ...avatarConfig }}>
      <svg
        width={width}
        height={height}
        style={{ ...style }}
        viewBox="0 0 264 280"
      >
        {getChildrenComponent()}
      </svg>
    </AvatarContext.Provider>
  );
};

export default Piece;