import * as React from 'react';
import type { Meta } from '@storybook/react';

import { Select } from '@real-system/select';

export default {
  title: 'Components/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export const Default = (args) => {
  return (
    <Select {...args} label="Select a fruit" maxW="22rem">
      <Select.Item value="Apple">Apple</Select.Item>
      <Select.Item value="Grape" disabled />
      <Select.Item value="Melon" />
    </Select>
  );
};

export const SelectGroupStory = (_args) => {
  return (
    <Select maxW="20rem" label="Select a fruit">
      <Select.Group>
        <Select.Group.Label>Fruits</Select.Group.Label>
        <Select.Item value="Apple" />
        <Select.Item value="Grape" disabled />
        <Select.Item value="Melon" />
      </Select.Group>
      <Select.Group>
        <Select.Group.Label>Vegatables</Select.Group.Label>
        <Select.Item value="Cucumber" />
        <Select.Item value="Pepper" disabled />
        <Select.Item value="Onion" />
      </Select.Group>
    </Select>
  );
};

SelectGroupStory.storyName = 'Select Group';
