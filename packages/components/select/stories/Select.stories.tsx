import * as React from 'react';
import { Meta } from '@storybook/react';

import { Select } from '@real-system/select';

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: {
    Select,
    Group: Select.Group,
    GroupLabel: Select.GroupLabel,
    Item: Select.Item,
    Separator: Select.Separator,
  },
} as Meta;

export const Default = (args) => {
  return (
    <Select {...args} label="Select a fruit" disabled maxW="22rem">
      <Select.Item value="Apple">Apple</Select.Item>
      <Select.Item value="Grape" disabled />
      <Select.Item value="Melon" />
    </Select>
  );
};

export const SelectGroupStory = (args) => {
  return (
    <Select maxW="20rem" label="Select a fruit">
      <Select.Group>
        <Select.GroupLabel>Fruits</Select.GroupLabel>
        <Select.Item value="Apple" />
        <Select.Item value="Grape" disabled />
        <Select.Item value="Melon" />
      </Select.Group>
      <Select.Separator />
      <Select.Group>
        <Select.GroupLabel>Vegatables</Select.GroupLabel>
        <Select.Item value="Cucumber" />
        <Select.Item value="Pepper" disabled />
        <Select.Item value="Onion" />
      </Select.Group>
    </Select>
  );
};

SelectGroupStory.storyName = 'Select Group';
