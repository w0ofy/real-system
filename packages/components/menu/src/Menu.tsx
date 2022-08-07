import * as React from 'react';

import type { MenuStatePrimitiveProps } from '@real-system/menu-primitive';
import { useMenuStatePrimitive } from '@real-system/menu-primitive';

import { MenuContextProvider } from './MenuContext';

type MenuProps = {
  children: React.ReactNode;
} & Omit<MenuStatePrimitiveProps<any>, 'orientation'>;
/** @todo ^^ fix any param — this is supposed to be inferred from values prop — but there's currently a typing issue in ariakit */

/**
 * @todo Currently, `orientation` prop is omitted. This is because we don't have "horizontal menus". Consider adding and API for this
 */

/**
 * Dropdown menu for the common dropdown menu button pattern.
 */
const Menu = ({
  children,
  placement = 'bottom-end',
  open,
  values,
  defaultValues,
  flip = true,
  ...restProps
}: MenuProps) => {
  const state = useMenuStatePrimitive({
    gutter: 4,
    placement,
    open,
    values,
    defaultValues,
    flip,
    ...restProps,
  });
  return <MenuContextProvider state={state}>{children}</MenuContextProvider>;
};

export type { MenuProps };
export { Menu };
