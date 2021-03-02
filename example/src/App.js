import React from 'react';

import { Avatar } from 'react-avatar-plus';

const App = () => {
  return (
    <Avatar
      avatarConfig={{
        hairColor: 'red',
        skinColor: 'pale',
        clothesType: 'shirtScoopNeck',
        mouthType: 'default',
        // facialHairType: 'MoustacheMagnum',
        // facialHairColor: 'Black',
        eyeType: 'Dizzy'
      }}
    />
  );
};

export default App;
