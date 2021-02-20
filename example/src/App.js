import React from 'react';

import { Avatar } from 'react-avatar-plus';

const App = () => {
  return (
    <Avatar
      avatarConfig={{
        hairColor: 'red',
        skinColor: 'light',
        topType: 'LongHairCurvy',
      }}
    />
  );
};

export default App;
