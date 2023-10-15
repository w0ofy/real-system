import React, { forwardRef } from 'react';

import { real } from '@real-system/elements-primitive';
import type { StylishProps } from '@real-system/styled-library';

import type { CommonMenuItemProps } from './MenuItem.types';

const menuItemStyles: StylishProps = {
  transition: 'background-color 150ms ease-out, color 150ms ease-out',
  paddingX: 7,
  paddingY: 5,
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
  color: 'gray-500',
  fontScale: 'menu-item',
  fontWeight: 'menu-item',
  letterSpacing: 'menu-item',
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

const MenuItemWrapper = forwardRef<HTMLDivElement, CommonMenuItemProps>(
  function MenuItemWrapper({ children, ...restProps }, ref) {
    return (
      <real.div {...menuItemStyles} {...restProps} ref={ref}>
        {children}
      </real.div>
    );
  }
);

export { menuItemStyles, MenuItemWrapper };
