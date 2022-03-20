import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import { Icon } from '@real-system/icon';
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuItemCheckbox,
  MenuItemCommand,
  MenuItemIcon,
  MenuItemRadio,
  MenuList,
  MenuSeparator,
} from '@real-system/menu';

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: { MenuButton, Menu, MenuList, MenuItem },
} as Meta;

export const Default = (args) => (
  <Box height="24rem">
    <Menu>
      <MenuButton variant="minimal">
        <Icon icon="menu" />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <MenuItemIcon icon="pencil-alt" />
          Edit
          <MenuItemCommand>E</MenuItemCommand>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon icon="share" />
          Share
          <MenuItemCommand>S</MenuItemCommand>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon icon="archive" />
          Archive
          <MenuItemCommand>A</MenuItemCommand>
        </MenuItem>
        <MenuItem disabled>
          <MenuItemIcon icon="trash" />
          Delete
          <MenuItemCommand>D</MenuItemCommand>
        </MenuItem>
        <MenuSeparator />
        <MenuItem href="https://system.themikewolf.com" external>
          Report
        </MenuItem>
      </MenuList>
    </Menu>
  </Box>
);

export const MenuGroups = (args) => (
  <Box height="24rem">
    <Menu>
      <MenuButton variant="minimal">
        <Icon icon="menu" />
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <MenuGroupLabel>Profile Actions</MenuGroupLabel>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Billing</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Help</MenuGroupLabel>
          <MenuItem>Docs</MenuItem>
          <MenuItem href="https://system.themikewolf.com" external>
            FAQ
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  </Box>
);

export const CheckboxMenu = (args) => {
  const [values, setValues] = useState({
    watching: ['issues'],
  });

  return (
    <Box height="24rem">
      <Menu values={values} setValues={setValues}>
        <MenuButton
          size="sm"
          variant="outline"
          leadingIcon={<Icon icon="eye" size="xs" />}>
          Watch
        </MenuButton>
        <MenuList>
          <MenuItemCheckbox name="watching" value="issues">
            Issues
          </MenuItemCheckbox>
          <MenuItemCheckbox name="watching" value="pull-requests">
            Pull requests
          </MenuItemCheckbox>
          <MenuItemCheckbox name="watching" value="releases">
            Releases
          </MenuItemCheckbox>
          <MenuItemCheckbox name="watching" value="discussions">
            Discussions
          </MenuItemCheckbox>
          <MenuItemCheckbox name="watching" value="security-alerts">
            Security alerts
          </MenuItemCheckbox>
        </MenuList>
      </Menu>
    </Box>
  );
};

export const RadioMenu = () => {
  const [values, setValues] = useState({
    sortBy: 'name',
  });

  return (
    <Box height="24rem">
      <Menu values={values} setValues={setValues}>
        <MenuButton
          size="sm"
          variant="outline"
          leadingIcon={<Icon icon="sort-descending" size="xs" />}>
          Sort by: {values.sortBy}
        </MenuButton>
        <MenuList>
          <MenuItemRadio name="sortBy" value="name">
            Name
          </MenuItemRadio>
          <MenuItemRadio name="sortBy" value="description">
            Description
          </MenuItemRadio>
          <MenuItemRadio name="sortBy" value="release">
            Release
          </MenuItemRadio>
          <MenuItemRadio name="sortBy" value="color">
            Color
          </MenuItemRadio>
        </MenuList>
      </Menu>
    </Box>
  );
};
