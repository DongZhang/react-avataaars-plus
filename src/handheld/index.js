import React from 'react';

// Components
import ComponentSelector from '../utils/ComponentSelector';
import Beer from './Beer';

const componentsMap = {
  beer: Beer
};

const Handheld = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="handheldType" />
);

export default Handheld;
