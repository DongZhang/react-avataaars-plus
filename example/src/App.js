import React from 'react';

import { Avatar, Piece } from 'react-avatar-plus';

const App = () => {
  return (
    <>
      <Avatar
        avatarStyle="circle"
        style={{ height: 280, width: 280 }}
        avatarConfig={{
          skinColor: 'WarmIvory',
        }}
      />
    </>
  );
};

export default App;
