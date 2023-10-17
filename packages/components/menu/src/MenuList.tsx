import React, { forwardRef } from 'react';

import { MenuPrimitive } from '@real-system/menu-primitive';
import styled from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps } from './types';

const StyledMenuList = styled(MenuPrimitive)({
  py: 4,
  zIndex: 'dropdown',
  backgroundColor: 'white',
  boxShadow: 'menu',
  borderRadius: 4,
  width: 'auto',
  minWidth: '15rem',
  maxWidth: '22rem',
  outline: 'none',
});

type MenuListProps = {
  children: React.ReactNode;
} & CommonMenuProps<'div'>;

const MenuList = forwardRef<HTMLDivElement, MenuListProps>(function MenuList(
  { children, ...restProps },
  ref
) {
  return (
    <StyledMenuList
      data-testid={makeTestId('menu-list')}
      {...restProps}
      ref={ref}>
      {children}
    </StyledMenuList>
  );
});

export type { MenuListProps };
export { MenuList };
