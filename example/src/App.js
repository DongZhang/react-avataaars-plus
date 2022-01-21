import React from 'react';

import { Avatar, Piece } from 'react-avatar-plus';

const App = () => {
  return (
    <>
      <Piece type="graphicType" value="Bat" />
      <div
        style={{
          border: '1px solid black',
          height: 280,
          width: 280,
          display: 'flex',
        }}
      >
        <Avatar
          avatarStyle="transparent"
          style={{ height: 280, width: 280 }}
          avatarConfig={{
            handheldType: 'Tea',
          }}
        />
      </div>
    </>
  );
};

export default App;
