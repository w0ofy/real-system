import React, { forwardRef } from 'react';

import { MenuButtonPrimitive } from '@real-system/menu-primitive';
import { MenuItemPrimitive } from '@real-system/menu-primitive';
import { type ColorSchemes } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { CommonMenuItemProps } from './MenuItem.model';
import { MenuItemWrapper } from './MenuItem.style';
import { MenuItemCheckbox } from './MenuItemCheckbox';
import { MenuItemCommand } from './MenuItemCommand';
import { MenuItemIcon } from './MenuItemIcon';
import { MenuItemLink } from './MenuItemLink';
import { MenuItemRadio } from './MenuItemRadio';

type MenuItemProps = CommonMenuItemProps & {
  colorScheme?: ColorSchemes;
  isSubmenu?: boolean;
};

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
  function MenuItem({ children, isSubmenu, ...restProps }, ref) {
    return (
      <MenuItemPrimitive
        render={
          <MenuItemWrapper
            as={isSubmenu && MenuButtonPrimitive}
            {...restProps}
          />
        }
        data-testid={makeTestId('menu-item')}
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
