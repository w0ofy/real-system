import * as React from 'react';

import { Box } from '@real-system/box-primitive';
import { MenuGroupPrimitive } from '@real-system/menu-primitive';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps } from '../types';

type MenuGroupProps = {
  children?: React.ReactNode;
} & CommonMenuProps;

const MenuGroup = ({ children, ...restProps }: MenuGroupProps) => {
  return (
    <MenuGroupPrimitive
      as={Box}
      paddingTop={4}
      data-testid={makeTestId('menu-group')}
      {...restProps}>
      {children}
    </MenuGroupPrimitive>
  );
};

export type { MenuGroupProps };
export { MenuGroup };
