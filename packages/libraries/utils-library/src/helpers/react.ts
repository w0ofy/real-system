import * as React from 'react';

/**
 * Gets the valid children of a component aka ignores any nullish or falsey child
 */
function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];
}

export { getValidChildren };
