# react-avatar-plus

A react avatar component inspired by [Avataaars](https://github.com/fangpenlin/avataaars), based on Sketch library [Avataaars](https://avataaars.com/)

[![NPM](https://img.shields.io/npm/v/react-avatar-plus.svg)](https://www.npmjs.com/package/react-avatar-plus) 

# Features
- SVG based
- Light weight
- Scalable
- Easy to use
- Easy to integrate with custom editor

## What's in the plus
- 11 new handheld items
- Configurable background colors available for solid & circled backgrounds
- New WarmIvory skin color 
- A few minor svg display bug fixes

## Install

install react-avataaars-plus with npm
```bash
npm install --save react-avataaars-plus
```
or  yarn
```bash
npm install --save react-avataaars-plus
```

## Usage

```jsx
import React, { Component } from 'react'

import Avatar from 'react-avatar-plus'

class MyApp extends Component {
  render() {
    return 
      <Avatar
        avatarStyle="circle"
        style={{ height: 280, width: 280 }}
        avatarConfig={{
          skinColor: 'warmIvory',
          backgroundColor: 'blue03',
          topType: 'shortHairDreads01',
          hairColor: 'black',
          eyeType: 'happy',
          eyebrowType: 'default',
          mouthType: 'smile',
          clothesType: 'hoodie',
          clothesColor: 'pastelBlue',
          handheldType: 'juice'
        }}
      />
  }
}
```

if you would like to see full examples run `yarn start` from root folder,then go into example folder and run `yarn install` then `yarn start` to run the project locally.

## License

MIT © [DongZhang](https://github.com/DongZhang)
