import * as React from 'react';
import { Meta } from '@storybook/react';

import {
  Select,
  SelectContainer,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
} from '@real-system/select';
import { Text } from '@real-system/typography';

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: {
    SelectContainer,
    SelectGroup,
    SelectGroupLabel,
    SelectItem,
    SelectSeparator,
  },
} as Meta;

export const Default = (args) => {
  return (
    <SelectContainer {...args} disabled>
      <Text.Label>Select a fruit</Text.Label>
      <Select maxW="20rem">
        <SelectItem value="Apple">Apple</SelectItem>
        <SelectItem value="Grape" disabled />
        <SelectItem value="Melon" />
      </Select>
    </SelectContainer>
  );
};

export const SelectGroupStory = (args) => {
  return (
    <SelectContainer>
      <Text.Label>Select Groups</Text.Label>
      <Select maxW="20rem">
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="Apple" />
          <SelectItem value="Grape" disabled />
          <SelectItem value="Melon" />
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Vegatables</SelectGroupLabel>
          <SelectItem value="Cucumber" />
          <SelectItem value="Pepper" disabled />
          <SelectItem value="Onion" />
        </SelectGroup>
      </Select>
    </SelectContainer>
  );
};

SelectGroupStory.storyName = 'Select Group';
