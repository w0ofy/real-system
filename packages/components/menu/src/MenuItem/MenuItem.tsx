import React, { forwardRef, useMemo } from 'react';

import { AriakitMenuItem } from '@real-system/ariakit-library';

import type { MenuItemProps } from './components';
import { BoxMenuItem, MenuLink } from './components';

const MenuItem = forwardRef<HTMLAnchorElement | HTMLDivElement, MenuItemProps>(
  function MenuItem({ children, href, disabled, onClick, ...restProps }, ref) {
    const Item = useMemo(
      () =>
        href
          ? {
              Component: MenuLink,
              props: {
                href,
                ref: ref as unknown as React.ForwardedRef<HTMLDivElement>,
              },
            }
          : {
              Component: BoxMenuItem,
              props: {
                onClick,
                ref: ref as unknown as React.ForwardedRef<HTMLDivElement>,
              },
            },
      [href, onClick, ref]
    );

    return (
      <AriakitMenuItem
        as={Item.Component}
        disabled={disabled}
        {...Item.props}
        {...restProps}>
        {children}
      </AriakitMenuItem>
    );
  }
);

export type { MenuItemProps };
export { MenuItem };
