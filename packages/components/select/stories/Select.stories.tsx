import * as React from 'react';
import { Meta } from '@storybook/react';

import { Select, SelectItem, SelectPopover } from '@real-system/select';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template = (args) => {
  return (
    <Select>
      <SelectPopover>
        <SelectItem value="Apple" />
        <SelectItem value="Grape" disabled />
        <SelectItem value="Melon" />
      </SelectPopover>
    </Select>
  );
};

export const Default = Template.bind({});
