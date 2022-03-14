import React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Icon } from '@real-system/icon';
import { Menu, MenuButton, MenuItem, MenuList } from '@real-system/menu';

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: { MenuButton, Menu, MenuList, MenuItem },
} as Meta;

export const Default = (args) => (
  <Box height="24rem">
    <Menu>
      <MenuButton variant="fill" trailingIcon={<Icon icon="chevron-down" />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem disabled>Edit</MenuItem>
        <MenuItem>Share</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Archive</MenuItem>
        <MenuItem href="https://system.themikewolf.com">Report</MenuItem>
      </MenuList>
    </Menu>
  </Box>
);
