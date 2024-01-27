import * as React from 'react';

import {
  MenuProviderPrimitive,
  type MenuProviderPrimitiveProps,
  useMenuStorePrimitive,
} from '@real-system/menu-primitive';

import { MenuGroup } from './MenuGroup/index';
import { MenuItem } from './MenuItem/index';
import { MenuButton } from './MenuButton';
import { MenuList } from './MenuList';
import { MenuSeparator } from './MenuSeparator';

/**
 * @todo reset all component api props to `setValue` instead of renaming???
 */
type MenuProps = {
  children: React.ReactNode;
  onSelect?: MenuProviderPrimitiveProps['setValues'];
} & Pick<
  MenuProviderPrimitiveProps,
  'placement' | 'open' | 'values' | 'defaultValues' | 'setOpen'
>;

/**
 * @description Dropdown menu for the common dropdown menu button pattern.
 * @todo Make a permanent fix for patch to ariakit ""`undefined` middleware when arrow is not used" bug
 */
function Menu({
  children,
  placement = 'bottom-end',
  open,
  values,
  defaultValues,
  onSelect,
  setOpen,
}: MenuProps) {
  const store = useMenuStorePrimitive({
    placement,
    open,
    values,
    defaultValues,
    setValues: onSelect,
    setOpen,
  });
  return (
    <MenuProviderPrimitive store={store}>{children}</MenuProviderPrimitive>
  );
}

Menu.Button = MenuButton;
Menu.Group = MenuGroup;
Menu.Item = MenuItem;
Menu.List = MenuList;
Menu.Separator = MenuSeparator;

export type { MenuProps };
export { Menu };
