import React from 'react';

import { AriakitMenuItemProps } from '@real-system/ariakit-library';

type LinkOrItem =
  | {
      href?: string;
      onClick?: never;
    }
  | {
      href?: never;
      onClick?: AriakitMenuItemProps['onClick'];
    };

type MenuItemProps = {
  children: NonNullable<React.ReactNode>;
  disabled?: AriakitMenuItemProps['disabled'];
} & LinkOrItem;

export type { MenuItemProps };
