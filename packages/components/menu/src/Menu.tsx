import * as React from 'react';

import type {
  MenuStatePrimitive,
  MenuStatePrimitiveProps,
} from '@real-system/menu-primitive';
import { useMenuStatePrimitive } from '@real-system/menu-primitive';

import { MenuGroup } from './MenuGroup/index';
import { MenuItem } from './MenuItem/index';
import { MenuButton } from './MenuButton';
import type { Values } from './MenuContext';
import { MenuContextProvider } from './MenuContext';
import { MenuList } from './MenuList';
import { MenuSeparator } from './MenuSeparator';

/**
 * @todo reset all component api props to `setValue` instead of renaming???
 */
type MenuProps<V extends Values = Values> = {
  children: React.ReactNode;
  onSelect?: MenuStatePrimitiveProps<V>['setValues'];
} & Omit<MenuStatePrimitiveProps<V>, 'orientation'>;

/**
 * @description Dropdown menu for the common dropdown menu button pattern.
 */
function Menu<V extends Values = Values>({
  children,
  placement = 'bottom-end',
  open,
  values,
  defaultValues,
  flip = true,
  onSelect,
  ...restProps
}: MenuProps<V>) {
  const state = useMenuStatePrimitive<V>({
    gutter: 4,
    placement,
    open,
    values,
    defaultValues,
    flip,
    setValues: onSelect,
    ...restProps,
  });
  return (
    <MenuContextProvider value={state as unknown as MenuStatePrimitive}>
      <>{children}</>
    </MenuContextProvider>
  );
}

Menu.Button = MenuButton;
Menu.Group = MenuGroup;
Menu.Item = MenuItem;
Menu.List = MenuList;
Menu.Separator = MenuSeparator;

export type { MenuProps };
export { Menu };
