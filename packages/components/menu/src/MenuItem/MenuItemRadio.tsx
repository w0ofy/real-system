import React, { forwardRef } from 'react';

import type { AriakitMenuItemRadioProps } from '@real-system/ariakit-library';
import {
  AriakitMenuItemCheck,
  AriakitMenuItemRadio,
} from '@real-system/ariakit-library';
import type { StylishProps } from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuProps, OmitMenuState } from '../types';

import { BoxMenuItem } from './components';

type MenuItemRadioProps = OmitMenuState<AriakitMenuItemRadioProps> &
  CommonMenuProps;

const styleProps: StylishProps = {
  display: 'flex',
  alignItems: 'center',
  scrollMargin: '1rem',
  gap: 4,
};

const MenuItemRadio = forwardRef<HTMLDivElement, MenuItemRadioProps>(
  function MenuItemRadio(
    {
      children,
      disabled,
      onClick,
      value,
      name,
      hideOnClick = true,
      ...restProps
    },
    ref
  ) {
    return (
      <AriakitMenuItemRadio
        as={BoxMenuItem}
        disabled={disabled}
        hideOnClick={hideOnClick}
        onClick={onClick}
        name={name}
        value={value}
        data-testid={makeTestId('menu-item-radio')}
        {...styleProps}
        {...restProps}
        ref={ref}>
        <AriakitMenuItemCheck />
        {children}
      </AriakitMenuItemRadio>
    );
  }
);

export type { MenuItemRadioProps };
export { MenuItemRadio };
