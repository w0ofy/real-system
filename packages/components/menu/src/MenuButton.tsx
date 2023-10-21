import React, { forwardRef } from 'react';

import type { ButtonProps } from '@real-system/button';
import { Button } from '@real-system/button';
import { Icon } from '@real-system/icon';
import {
  MenuButtonPrimitive,
  useMenuContextPrimitive,
} from '@real-system/menu-primitive';
import { makeTestId } from '@real-system/utils-library';

import { MenuItem } from './MenuItem';

type MenuButtonProps = (
  | {
      trailingArrow?: boolean;
      leadingArrow?: never;
    }
  | {
      trailingArrow?: never;
      leadingArrow?: boolean;
    }
) &
  Omit<ButtonProps, 'children' | 'as'> & { children: string };

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  function MenuButton(
    { children, trailingArrow, leadingArrow, ...restProps },
    ref
  ) {
    const menu = useMenuContextPrimitive();

    if (menu?.parent) {
      return (
        <MenuItem isSubmenu>
          {children}
          <MenuItem.Icon icon="chevron-right" alignRight />
        </MenuItem>
      );
    }

    return (
      <MenuButtonPrimitive
        data-testid={makeTestId('menu-button')}
        render={
          <Button
            {...getChevronProp(trailingArrow, leadingArrow)}
            {...restProps}
          />
        }
        ref={ref}>
        {children}
      </MenuButtonPrimitive>
    );
  }
);

const getChevronProp = (trailingArrow?: boolean, leadingArrow?: boolean) => {
  if (trailingArrow || leadingArrow) {
    const buttonIconPropKey = leadingArrow ? 'leadingIcon' : 'trailingIcon';
    return {
      [buttonIconPropKey]: <Icon icon="chevron-down" />,
    };
  }
  return {};
};

export type { MenuButtonProps };
export { MenuButton };
