import React from 'react';

import { Avatar } from 'react-avatar-plus';

const App = () => {
  return (
    <Avatar
      avatarConfig={{
        hairColor: 'red',
        skinColor: 'light',
        topType: 'LongHairStraightStrand',
        accessoryType: 'Sunglasses',
        clothType: 'ShirtScoopNeck',
      }}
    />
  );
};

export default App;
