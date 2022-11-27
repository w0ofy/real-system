import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box';
import { Icon } from '@real-system/icon';
import { Menu } from '@real-system/menu';

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {
    'Menu.Button': Menu.Button,
    'Menu.Group': Menu.Group,
    'Menu.Group.Label': Menu.Group.Label,
    'Menu.List': Menu.List,
    'Menu.Separator': Menu.Separator,
    'Menu.Item': Menu.Item,
    'Item.Checkbox': Menu.Item.Checkbox,
    'Item.Command': Menu.Item.Command,
    'Item.Icon': Menu.Item.Icon,
    'Item.Link': Menu.Item.Link,
    'Item.Radio': Menu.Item.Radio,
  },
} as Meta;

export const Default = () => (
  <Box height="24rem">
    <Menu>
      <Menu.Button variant="minimal">
        <Icon icon="menu" />
      </Menu.Button>
      <Menu.List>
        <Menu.Item>
          <Menu.Item.Icon icon="pencil-alt" />
          Edit
          <Menu.Item.Command>E</Menu.Item.Command>
        </Menu.Item>
        <Menu.Item>
          <Menu.Item.Icon icon="share" />
          Share
          <Menu.Item.Command>S</Menu.Item.Command>
        </Menu.Item>
        <Menu.Item>
          <Menu.Item.Icon icon="archive" />
          Archive
          <Menu.Item.Command>A</Menu.Item.Command>
        </Menu.Item>
        <Menu.Item disabled>
          <Menu.Item.Icon icon="trash" />
          Delete
          <Menu.Item.Command>D</Menu.Item.Command>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item.Link
          href="https://system.themikewolf.com"
          external
          showExternal>
          Report issue
        </Menu.Item.Link>
      </Menu.List>
    </Menu>
  </Box>
);

export const MenuGroups = () => (
  <Box height="24rem">
    <Menu>
      <Menu.Button variant="minimal">
        <Icon icon="menu" />
      </Menu.Button>
      <Menu.List>
        <Menu.Group>
          <Menu.Group.Label>Account</Menu.Group.Label>
          <Menu.Item>Profile details</Menu.Item>
          <Menu.Item>Billing</Menu.Item>
        </Menu.Group>
        <Menu.Separator />
        <Menu.Group>
          <Menu.Group.Label>Help</Menu.Group.Label>
          <Menu.Item>Docs</Menu.Item>
          <Menu.Item.Link
            href="https://system.themikewolf.com"
            external
            showExternal>
            FAQ
          </Menu.Item.Link>
        </Menu.Group>
      </Menu.List>
    </Menu>
  </Box>
);

export const CheckboxMenu = () => {
  const [values, setValues] = useState({
    watching: ['issues'],
  });

  return (
    <Box height="24rem">
      <Menu values={values} setValues={(value) => setValues(value)}>
        <Menu.Button
          size="sm"
          variant="outline"
          leadingIcon={<Icon icon="eye" size="xs" />}>
          Watch
        </Menu.Button>
        <Menu.List>
          <Menu.Item.Checkbox name="watching" value="issues">
            Issues
          </Menu.Item.Checkbox>
          <Menu.Item.Checkbox name="watching" value="pull-requests">
            Pull requests
          </Menu.Item.Checkbox>
          <Menu.Item.Checkbox name="watching" value="releases">
            Releases
          </Menu.Item.Checkbox>
          <Menu.Item.Checkbox name="watching" value="discussions">
            Discussions
          </Menu.Item.Checkbox>
          <Menu.Item.Checkbox name="watching" value="security-alerts">
            Security alerts
          </Menu.Item.Checkbox>
        </Menu.List>
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
      <Menu values={values} setValues={(value) => setValues(value)}>
        <Menu.Button
          size="sm"
          variant="outline"
          leadingIcon={<Icon icon="sort-descending" size="xs" />}>
          Sort by: {values.sortBy}
        </Menu.Button>
        <Menu.List>
          <Menu.Item.Radio name="sortBy" value="name">
            Name
          </Menu.Item.Radio>
          <Menu.Item.Radio name="sortBy" value="description">
            Description
          </Menu.Item.Radio>
          <Menu.Item.Radio name="sortBy" value="release">
            Release
          </Menu.Item.Radio>
          <Menu.Item.Radio name="sortBy" value="color">
            Color
          </Menu.Item.Radio>
        </Menu.List>
      </Menu>
    </Box>
  );
};
