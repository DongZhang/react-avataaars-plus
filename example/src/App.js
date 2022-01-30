import React from 'react';

import { Avatar } from 'react-avatar-plus';

const App = () => {
  return (
    <Avatar
      avatarStyle="circle"
      style={{ height: 280, width: 280 }}
      avatarConfig={{
        backgroundColor: 'blue03',
        skinColor: 'warmIvory',
        topType: 'shortHairDreads01',
        hairColor: 'black',
        eyeType: 'happy',
        eyebrowType: 'default',
        mouthType: 'smile',
        clothesType: 'hoodie',
        clothesColor: 'pastelBlue',
        handheldType: 'tea'
      }}
    />
  );
};

export default App;
