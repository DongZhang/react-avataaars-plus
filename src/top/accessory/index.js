import React from 'react';

// Components
import ComponentSelector from '../../utils/ComponentSelector';
import Kurt from './Kurt';
import Prescription01 from './Prescription01';
import Prescription02 from './Prescription02';
import Round from './Round';
import Sunglasses from './Sunglasses';
import Wayfarers from './Wayfarers';
import EyePatch from './EyePatch';

const componentsMap = {
  kurt: Kurt,
  prescription01: Prescription01,
  prescription02: Prescription02,
  round: Round,
  sunglasses: Sunglasses,
  wayfarers: Wayfarers,
  eyePatch: EyePatch,
};

const Hair = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="accessoryType" />
);

export default Hair;
