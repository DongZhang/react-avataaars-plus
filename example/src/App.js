import React from 'react';

import { Avatar } from 'react-avatar-plus';

const App = () => {
  return (
    <Avatar
      avatarConfig={{
        hairColor: 'red',
        skinColor: 'pale',
        topType: 'LongHairStraightStrand',
        accessoryType: 'Wayfarers',
        clothesType: 'shirtScoopNeck',
        clothesColor: 'red',
      }}
    />
  );
};

export default App;
