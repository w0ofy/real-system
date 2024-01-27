import React, { forwardRef } from 'react';

import type { IconProps } from '@real-system/icon';
import { Icon } from '@real-system/icon';
import { makeTestId } from '@real-system/utils-library';

type MenuItemIconProps = {
  alignRight?: boolean;
} & Omit<IconProps, 'size'>;

const MenuItemIcon = forwardRef<HTMLSpanElement, MenuItemIconProps>(
  function MenuItemIcon({ alignRight, ...restProps }, ref) {
    const spaceProps = alignRight
      ? { marginLeft: 'auto', marginRight: 0 }
      : { marginRight: 5 };

    return (
      <Icon
        data-testid={makeTestId('menu-item-icon')}
        {...restProps}
        {...spaceProps}
        ref={ref}
      />
    );
  }
);

export type { MenuItemIconProps };
export { MenuItemIcon };
