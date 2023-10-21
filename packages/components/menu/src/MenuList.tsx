import React, { forwardRef } from 'react';

import {
  MenuPrimitive,
  useMenuContextPrimitive,
} from '@real-system/menu-primitive';
import styled from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps } from './types';

const StyledMenuList = styled(MenuPrimitive)({
  pos: 'relative',
  py: 4,
  px: 4,
  zIndex: 'dropdown',
  backgroundColor: 'white',
  boxShadow: 'menu',
  borderRadius: 4,
  width: 'auto',
  minWidth: '18rem',
  maxWidth: '22rem',
  maxHeight: '65rem',
  outline: 'none',
  overflow: 'visible',
  overscrollBehavior: 'contain',
});

type MenuListProps = {
  children: React.ReactNode;
} & CommonMenuProps<'div'>;

const MenuList = forwardRef<HTMLDivElement, MenuListProps>(function MenuList(
  { children, ...restProps },
  ref
) {
  const menu = useMenuContextPrimitive();

  return (
    <StyledMenuList
      data-testid={makeTestId('menu-list')}
      {...restProps}
      gutter={8}
      shift={menu?.parent ? -8 : 0}
      ref={ref}>
      {children}
    </StyledMenuList>
  );
});

export type { MenuListProps };
export { MenuList };
