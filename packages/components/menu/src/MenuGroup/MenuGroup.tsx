import * as React from 'react';

import { MenuGroupPrimitive } from '@real-system/menu-primitive';
import styled from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps } from '../types';

const StyledMenuGroup = styled('div')({
  paddingTop: 4,
});

type MenuGroupProps = {
  children?: React.ReactNode;
} & CommonMenuProps;

const MenuGroup = ({ children, ...restProps }: MenuGroupProps) => {
  return (
    <MenuGroupPrimitive
      as={StyledMenuGroup}
      data-testid={makeTestId('menu-group')}
      {...restProps}>
      {children}
    </MenuGroupPrimitive>
  );
};

export type { MenuGroupProps };
export { MenuGroup };
