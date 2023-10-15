import React, { forwardRef } from 'react';

import { MenuItemPrimitive } from '@real-system/menu-primitive';
import { makeTestId } from '@real-system/utils-library';

import { MenuItemWrapper } from './MenuItem.style';
import type { CommonMenuItemProps } from './MenuItem.types';
import { MenuItemCheckbox } from './MenuItemCheckbox';
import { MenuItemCommand } from './MenuItemCommand';
import { MenuItemIcon } from './MenuItemIcon';
import { MenuItemLink } from './MenuItemLink';
import { MenuItemRadio } from './MenuItemRadio';

type MenuItemProps = CommonMenuItemProps;

export interface MenuItemComponent
  extends React.ForwardRefExoticComponent<MenuItemProps> {
  Checkbox: typeof MenuItemCheckbox;
  Command: typeof MenuItemCommand;
  Icon: typeof MenuItemIcon;
  Link: typeof MenuItemLink;
  Radio: typeof MenuItemRadio;
}

// @ts-ignore MenuItem properties are defined below
const MenuItem: MenuItemComponent = forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem({ children, ...restProps }, ref) {
    return (
      <MenuItemPrimitive
        as={MenuItemWrapper}
        data-testid={makeTestId('menu-item')}
        {...restProps}
        ref={ref}>
        {children}
      </MenuItemPrimitive>
    );
  }
);

MenuItem.Checkbox = MenuItemCheckbox;
MenuItem.Command = MenuItemCommand;
MenuItem.Icon = MenuItemIcon;
MenuItem.Link = MenuItemLink;
MenuItem.Radio = MenuItemRadio;

export type { MenuItemProps };
export { MenuItem, MenuItemWrapper };
