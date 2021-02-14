import React from 'react';

const Switch = ({ selectedValue, children }) => {
  let matchedChild = null;
  React.Children.forEach(children, (child) => {
    const childType = child.type;
    if (childType.name === selectedValue && child) {
      matchedChild = child;
    }
  });

  return matchedChild;
};

export default Switch;
