import React, { useMemo } from 'react';

import { AriakitMenuButton } from '@real-system/ariakit-library';
import { BoxStyleProps } from '@real-system/box-primitive';
import { Button, ButtonProps } from '@real-system/button';
import { Icon } from '@real-system/icon';

import { useMenuStateContext } from './MenuContext';

type ConstantProps = Pick<
  ButtonProps,
  | 'variant'
  | 'colorScheme'
  | 'children'
  | 'trailingIcon'
  | 'leadingIcon'
  | 'size'
> &
  BoxStyleProps;

/**
 * @todo maybe add _expanded pseudo style prop (to theme library / button ?) ??? see chakra-ui for MenuButton example
 */
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
  ConstantProps;

const MenuButton = ({
  children,
  trailingArrow,
  leadingArrow,
  ...restProps
}: MenuButtonProps) => {
  const state = useMenuStateContext();
  const chevron = useMemo(() => {
    if (trailingArrow) {
      return { trailingIcon: <Icon icon="chevron-down" /> };
    }
    if (leadingArrow) {
      return { leadingIcon: <Icon icon="chevron-down" /> };
    }
  }, [trailingArrow, leadingArrow]);
  return (
    // @ts-ignore conflict with as prop
    <AriakitMenuButton
      as={Button}
      active={state.visible}
      {...restProps}
      {...chevron}
      state={state}>
      {children}
    </AriakitMenuButton>
  );
};

export type { MenuButtonProps };
export { MenuButton };
