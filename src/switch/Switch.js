import React from 'react';

const Switch = ({ selectedValue, children }) => {
  const availableOptions = {};
  React.Children.forEach(children, (child) => {
    const childName = child.type.name;
    availableOptions[childName.toLowerCase()] = child;
    console.log(child);
  });

  if (!availableOptions.hasOwnProperty(selectedValue.toLowerCase())) {
    console.error(`Value: ${selectedValue} is an invalid value`);
    return null;
  }

  return availableOptions[selectedValue.toLowerCase()];
};

export default Switch;
