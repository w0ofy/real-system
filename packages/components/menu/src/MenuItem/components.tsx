import React, { forwardRef } from 'react';

import { AriakitMenuItemProps } from '@real-system/ariakit-library';
import { Box } from '@real-system/box-primitive';
import { Icon } from '@real-system/icon';
import { StylishProps } from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import { CommonMenuProps } from '../types';

type AnchorAttributes = React.AnchorHTMLAttributes<'a'>;
type LinkOrItemProps =
  | {
      href?: string;
      external?: boolean;
      target?: AnchorAttributes['target'];
      rel?: AnchorAttributes['rel'];
      title?: AnchorAttributes['title'];
      onClick?: never;
    }
  | {
      href?: never;
      external?: never;
      target?: never;
      rel?: never;
      title?: never;
      onClick?: AriakitMenuItemProps['onClick'];
    };
type MenuItemProps = LinkOrItemProps &
  CommonMenuProps &
  Pick<
    AriakitMenuItemProps,
    | 'hideOnClick'
    | 'focusOnHover'
    | 'preventScrollOnKeyDown'
    | 'disabled'
    | 'children'
  >;

const menuItemStyles: StylishProps = {
  transition: 'background-color 150ms ease-out, color 150ms ease-out',
  paddingX: 7,
  paddingY: 3,
  display: 'block',
  width: '100%',
  color: 'gray-500',
  fontSize: 1,
  fontWeight: 1,
  lineHeight: 4,
  textDecoration: 'none',
  cursor: 'pointer',
  _hover: {
    backgroundColor: 'gray-50',
    color: 'gray-600',
  },
  _active: {
    backgroundColor: 'gray-100',
    color: 'gray-700',
  },
  _checked: {
    color: 'gray-700',
  },
  _disabled: { backgroundColor: 'none', color: 'gray-300' },
};

const menuLinkStyles: StylishProps = {
  ...menuItemStyles,
  _hover: {
    ...menuItemStyles._hover,
    color: 'blue-500',
    textDecoration: 'underline',
  },
  _active: {
    ...menuItemStyles._active,
    color: 'blue-600',
    textDecoration: 'underline',
  },
};

const BoxMenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  function BoxMenuItem({ children, ...restProps }: MenuItemProps, ref) {
    return (
      <Box
        {...menuItemStyles}
        data-testid={makeTestId('menu-item')}
        {...restProps}
        ref={ref}>
        {children}
      </Box>
    );
  }
);

const MenuLink = forwardRef<HTMLAnchorElement, MenuItemProps>(function MenuLink(
  { children, href, external, ...restProps },
  ref
) {
  const externalLinkProps = external
    ? {
        target: '_blank',
        rel: 'noopener',
      }
    : {};
  return (
    <Box
      {...externalLinkProps}
      {...menuLinkStyles}
      data-testid={makeTestId('menu-item-link')}
      {...restProps}
      as="a"
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      href={href!}
      ref={ref}>
      {children}
      {external ? (
        <Icon
          icon="external-link"
          size="sm"
          display="inline-block"
          verticalAlign="text-bottom"
          marginLeft={2}
        />
      ) : null}
    </Box>
  );
});

export type { MenuItemProps };
export { BoxMenuItem, MenuLink };
