import React from 'react';

// Components
import ComponentSelector from '../../utils/ComponentSelector';
import Kurt from './Kurt';

const componentsMap = {
  kurt: Kurt,
};

const Hair = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="accessoryType" />
);

export default Hair;
