import React from 'react';

import { Avatar } from 'react-avatar-plus';

const App = () => {
  return (
    <Avatar
      avatarConfig={{
        hairColor: 'red',
        skinColor: 'pale',
        clothesType: 'ShirtVNeck',
        clothesColor: 'blue01',
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
