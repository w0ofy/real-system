import React, { forwardRef, useMemo } from 'react';

import { AriakitMenuButton } from '@real-system/ariakit-library';
import type { ButtonProps } from '@real-system/button';
import { Button } from '@real-system/button';
import { Icon } from '@real-system/icon';
import { makeTestId, RealSystemElementProps } from '@real-system/utils-library';

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
  ButtonProps &
  RealSystemElementProps;

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
      <AriakitMenuButton
        as={Button}
        data-testid={makeTestId('menu-button')}
        state={state}
        // prop union is too complex. so, casting as any
        {...(restProps as unknown)}
        {...chevron}
        ref={ref}>
        {children}
      </AriakitMenuButton>
    );
  }
);

export type { MenuButtonProps };
export { MenuButton };
