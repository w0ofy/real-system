import React, { forwardRef } from 'react';

import type { MenuItemCheckboxPrimitiveProps } from '@real-system/menu-primitive';
import {
  MenuItemCheckboxPrimitive,
  MenuItemCheckPrimitive,
} from '@real-system/menu-primitive';
import type { StylishProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps, OmitMenuStore } from '../types';

import { MenuItemWrapper } from './MenuItem';

type MenuItemCheckboxProps = OmitMenuStore<MenuItemCheckboxPrimitiveProps> &
  CommonMenuProps;

const styleProps: StylishProps = {
  display: 'flex',
  alignItems: 'center',
  scrollMargin: '1rem',
  gap: 4,
};

const MenuItemCheckbox = forwardRef<HTMLDivElement, MenuItemCheckboxProps>(
  function MenuItemCheckbox(
    { children, disabled, onClick, value, name, ...restProps },
    ref
  ) {
    return (
      <MenuItemCheckboxPrimitive
        render={<MenuItemWrapper {...styleProps} />}
        disabled={disabled}
        onClick={onClick}
        name={name}
        value={value}
        data-testid={makeTestId('menu-item-checkbox')}
        {...restProps}
        ref={ref}>
        <>
          <MenuItemCheckPrimitive />
          {children}
        </>
      </MenuItemCheckboxPrimitive>
    );
  }
);

export type { MenuItemCheckboxProps };
export { MenuItemCheckbox };
