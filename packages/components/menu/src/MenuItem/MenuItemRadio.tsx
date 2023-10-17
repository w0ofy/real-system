import React, { forwardRef } from 'react';

import type { MenuItemRadioPrimitiveProps } from '@real-system/menu-primitive';
import {
  MenuItemCheckPrimitive,
  MenuItemRadioPrimitive,
} from '@real-system/menu-primitive';
import type { StylishProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps, OmitMenuStore } from '../types';

import { MenuItemWrapper } from './MenuItem';

type MenuItemRadioProps = OmitMenuStore<MenuItemRadioPrimitiveProps> &
  CommonMenuProps;

const styleProps: StylishProps = {
  display: 'flex',
  alignItems: 'center',
  scrollMargin: '1rem',
  gap: 4,
};

const MenuItemRadio = forwardRef<HTMLDivElement, MenuItemRadioProps>(
  function MenuItemRadio(
    { children, disabled, onClick, value, name, hideOnClick, ...restProps },
    ref
  ) {
    return (
      /** @ts-ignore `as` prop type conflicts */
      <MenuItemRadioPrimitive
        render={<MenuItemWrapper {...styleProps} />}
        disabled={disabled}
        hideOnClick={hideOnClick}
        onClick={onClick}
        name={name}
        value={value}
        data-testid={makeTestId('menu-item-radio')}
        {...restProps}
        ref={ref}>
        <MenuItemCheckPrimitive />
        {/** @todo fix this — error occured after upgrading to ts 5.x - probably should upgrade ariakit and fix every breaking change */}
        {children as React.ReactNode}
      </MenuItemRadioPrimitive>
    );
  }
);

export type { MenuItemRadioProps };
export { MenuItemRadio };
