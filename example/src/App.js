import React from 'react';

import { Avatar } from 'react-avatar-plus';

const App = () => {
  return (
    <Avatar
      avatarStyle="transparent"
      style={{ height: 280, width: 280 }}
      avatarConfig={{
        // hairColor: 'red',
        // skinColor: 'pale',
        // clothesType: 'BlazerShirt',
        // clothesColor: 'blue02',
        // graphicType: 'skullOutline',
        // mouthType: 'default',
        // facialHairType: 'MoustacheMagnum',
        // facialHairColor: 'Black',
        // eyeType: 'default',
        // eyebrowType: 'default',
        avatarStyle: 'circle'
      }}
    />
  );
};

export default App;
