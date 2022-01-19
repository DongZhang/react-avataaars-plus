import React from 'react';

// Components
import ComponentSelector from '../utils/ComponentSelector';
import Beer from './Beer';
import Fries from './Fries';

const componentsMap = {
  beer: Beer,
  fries: Fries,
};

const Handheld = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="handheldType" />
);

export default Handheld;
