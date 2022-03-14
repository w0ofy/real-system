import React, { useMemo } from 'react';

import { AriakitMenuItem } from '@real-system/ariakit-library';
import { Box } from '@real-system/box-primitive';

import { BoxMenuItem, MenuLink } from './components';
import { MenuItemProps } from './types';

const MenuItem = ({
  children,
  href,
  disabled,
  onClick,
  ...restProps
}: MenuItemProps) => {
  const Item = useMemo(
    () =>
      href
        ? {
            Component: MenuLink,
            props: { href },
          }
        : {
            Component: BoxMenuItem,
            props: { onClick },
          },
    [href, onClick]
  );
  return (
    // <Box as="span" cursor={disabled ? 'not-allowed' : 'none'}>
    <AriakitMenuItem
      as={Item.Component}
      disabled={disabled}
      {...Item.props}
      {...restProps}>
      {children}
    </AriakitMenuItem>
    // </Box>
  );
};

export type { MenuItemProps };
export { MenuItem };
