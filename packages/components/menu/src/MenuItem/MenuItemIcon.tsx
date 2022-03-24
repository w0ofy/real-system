import React, { forwardRef } from 'react';

import { Icon, IconProps } from '@real-system/icon';
import { makeTestId } from '@real-system/utils-library';

type MenuItemIconProps = (
  | {
      alignLeft?: boolean;
      alignRight?: never;
    }
  | {
      alignLeft?: never;
      alignRight?: boolean;
    }
) &
  Omit<IconProps, 'size'>;

const MenuItemIcon = forwardRef<HTMLSpanElement, MenuItemIconProps>(
  function MenuItemIcon({ alignRight, alignLeft = true, ...restProps }, ref) {
    const spaceProps = alignLeft
      ? { marginRight: 5 }
      : alignRight
      ? { marginLeft: 'auto', marginRight: 0 }
      : {};

    return (
      <Icon
        data-testid={makeTestId('menu-item-icon')}
        {...spaceProps}
        {...restProps}
        ref={ref}
      />
    );
  }
);

export type { MenuItemIconProps };
export { MenuItemIcon };
