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
import { Label } from '@real-system/typography';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

export const Default = (args) => {
  return (
    <SelectContainer {...args}>
      <Label>Select a fruit</Label>
      <Select maxW="20rem">
        <SelectItem value="Apple" />
        <SelectItem value="Grape" disabled />
        <SelectItem value="Melon" />
      </Select>
    </SelectContainer>
  );
};

export const SelctGroup = (args) => {
  return (
    <SelectContainer>
      <Label>Select Groups</Label>
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
