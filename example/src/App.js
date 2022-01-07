import React from 'react';

import { Avatar, Piece } from 'react-avatar-plus';

const App = () => {
  return (
    <>
      <Piece
        type="topType"
        value="ShortHairFrizzle"
        pieceColorType="hairColor"
        pieceColorValue="Auburn"
      />
      <Avatar
        avatarStyle="transparent"
        style={{ height: 280, width: 280 }}
        avatarConfig={{
          hairColor: 'red',
          // skinColor: 'pale',
          clothesType: 'BlazerSweater',
          // clothesColor: 'blue02',
          // graphicType: 'skullOutline',
          // mouthType: 'default',
          facialHairType: 'BeardLight',
          facialHairColor: 'Black',
          // eyeType: 'default',
          // eyebrowType: 'default',
          topType: 'WinterHat02',
          accessoryType: 'Kurt',
        }}
      />
    </>
  );
};

export default App;
