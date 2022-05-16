import React, { forwardRef } from 'react';

import { real } from '@real-system/elements-primitive';
import { MenuItemPrimitive } from '@real-system/menu-primitive';
import type { StylishProps } from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import { CommonMenuItemProps } from './MenuItem.types';

type MenuItemProps = CommonMenuItemProps;

const menuItemStyles: StylishProps = {
  transition: 'background-color 150ms ease-out, color 150ms ease-out',
  paddingX: 7,
  paddingY: 3,
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
  color: 'gray-500',
  fontSize: 1,
  fontWeight: 3,
  lineHeight: 4,
  textDecoration: 'none',
  cursor: 'pointer',
  _hover: {
    backgroundColor: 'gray-50',
    color: 'gray-600',
  },
  _focus: {
    outline: 'none',
    backgroundColor: 'gray-50',
    color: 'gray-600',
  },
  _active: {
    backgroundColor: 'gray-100',
    color: 'gray-700',
  },
  _checked: {
    color: 'gray-700',
  },
  _disabled: { backgroundColor: 'none', color: 'gray-300' },
};

const RealMenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  function RealMenuItem({ children, ...restProps }, ref) {
    return (
      <real.div {...menuItemStyles} {...restProps} ref={ref}>
        {children}
      </real.div>
    );
  }
);

const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(function MenuItem(
  { children, ...restProps },
  ref
) {
  return (
    <MenuItemPrimitive
      as={RealMenuItem}
      data-testid={makeTestId('menu-item')}
      {...restProps}
      ref={ref}>
      {children}
    </MenuItemPrimitive>
  );
});

export type { MenuItemProps };
export { MenuItem, menuItemStyles, RealMenuItem };
