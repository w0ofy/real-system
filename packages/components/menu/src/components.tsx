import React from 'react';

import { Box } from '@real-system/box-primitive';
import { Icon } from '@real-system/icon';
import { StylishProps } from '@real-system/styling-library';

import { MenuItemProps } from './types';

const menuItemStyles: StylishProps = {
  transition: 'background-color 150ms ease-in-out, color 150ms ease-in-out',
  _hover: {
    backgroundColor: 'gray-50',
  },
  _active: {
    backgroundColor: 'gray-100',
    color: 'gray-600',
  },
  _disabled: { backgroundColor: 'none', color: 'gray-300' },
  paddingX: 7,
  paddingY: 3,
  display: 'block',
  width: '100%',
  color: 'gray-500',
  fontSize: 1,
  fontWeight: 1,
  lineHeight: 4,
  textDecoration: 'none',
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

const BoxMenuItem = ({ children, ...restProps }: MenuItemProps) => {
  return (
    <Box {...restProps} cursor="pointer" {...menuItemStyles}>
      {children}
    </Box>
  );
};

const MenuLink = ({ children, href, ...restProps }: MenuItemProps) => {
  return (
    <Box {...restProps} as="a" href={href!} {...menuLinkStyles}>
      {children}
      <Icon
        icon="external-link"
        size="sm"
        display="inline-block"
        verticalAlign="text-bottom"
        marginLeft={2}
      />
    </Box>
  );
};

export { BoxMenuItem, MenuLink };
