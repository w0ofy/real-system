import React from 'react';

import { AriakitMenuGroup } from '@real-system/ariakit-library';
import { Box } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps } from '../types';

type MenuGroupProps = {
  children?: React.ReactNode;
} & CommonMenuProps;

const MenuGroup = ({ children, ...restProps }: MenuGroupProps) => {
  return (
    <AriakitMenuGroup
      as={Box}
      paddingTop={4}
      data-testid={makeTestId('menu-group')}
      {...restProps}>
      {children}
    </AriakitMenuGroup>
  );
};

export type { MenuGroupProps };
export { MenuGroup };
