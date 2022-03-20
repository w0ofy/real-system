import React, { forwardRef } from 'react';

import {
  AriakitMenuItemCheck,
  AriakitMenuItemCheckbox,
  AriakitMenuItemCheckboxProps,
} from '@real-system/ariakit-library';
import type { StylishProps } from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps, OmitMenuState } from '../types';

import { BoxMenuItem } from './components';

type MenuItemCheckboxProps = OmitMenuState<AriakitMenuItemCheckboxProps> &
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
      <AriakitMenuItemCheckbox
        as={BoxMenuItem}
        disabled={disabled}
        onClick={onClick}
        name={name}
        value={value}
        data-testid={makeTestId('menu-item-checkbox')}
        {...styleProps}
        {...restProps}
        ref={ref}>
        <AriakitMenuItemCheck />
        {children}
      </AriakitMenuItemCheckbox>
    );
  }
);

export type { MenuItemCheckboxProps };
export { MenuItemCheckbox };
