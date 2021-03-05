import React from 'react';

import { Avatar } from 'react-avatar-plus';

const App = () => {
  return (
    <Avatar
      avatarConfig={{
        hairColor: 'red',
        skinColor: 'pale',
        clothesType: 'graphicShirt',
        clothesColor: 'blue01',
        graphicType: 'skullOutline',
        mouthType: 'default',
        // facialHairType: 'MoustacheMagnum',
        // facialHairColor: 'Black',
        eyeType: 'default',
        eyebrowType: 'default'
      }}
    />
  );
};

export default App;
