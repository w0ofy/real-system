import React, { forwardRef, useMemo } from 'react';

import type { ButtonProps } from '@real-system/button';
import { Button } from '@real-system/button';
import { Icon } from '@real-system/icon';
import { MenuButtonPrimitive } from '@real-system/menu-primitive';
import { makeTestId } from '@real-system/utils-library';

import { useMenuStateContext } from './MenuContext';

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
  ButtonProps;

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  function MenuButton(
    { children, trailingArrow, leadingArrow, ...restProps },
    ref
  ) {
    const state = useMenuStateContext();
    const chevron = useMemo(() => {
      if (trailingArrow) {
        return {
          trailingIcon: <Icon icon="chevron-down" />,
        };
      }
      if (leadingArrow) {
        return {
          leadingIcon: <Icon icon="chevron-down" />,
        };
      }
    }, [trailingArrow, leadingArrow]);

    return (
      <MenuButtonPrimitive
        as={Button}
        data-testid={makeTestId('menu-button')}
        state={state}
        {...restProps}
        {...chevron}
        ref={ref}>
        {children}
      </MenuButtonPrimitive>
    );
  }
);

export type { MenuButtonProps };
export { MenuButton };
