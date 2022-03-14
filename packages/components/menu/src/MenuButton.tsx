import React, { useMemo } from 'react';

import { AriakitMenuButton } from '@real-system/ariakit-library';
import { Button, ButtonProps } from '@real-system/button';
import { Icon } from '@real-system/icon';

import { useMenuStateContext } from './MenuContext';

type ConstantProps = Pick<
  ButtonProps,
  | 'variant'
  | 'colorScheme'
  | 'children'
  | 'size'
  | 'trailingIcon'
  | 'leadingIcon'
  | 'size'
> & {
  children: React.ReactNode;
};

type MenuButtonProps =
  | ({
      trailingArrow?: boolean;
      leadingArrow?: never;
    } & ConstantProps)
  | ({
      trailingArrow?: boolean;
      leadingArrow?: never;
    } & ConstantProps);

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
