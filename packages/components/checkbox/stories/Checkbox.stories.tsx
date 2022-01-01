import React from 'react';
import { Meta } from '@storybook/react';

import {
  Checkbox,
  CheckboxGroup as RealCheckboxGroup,
} from '@real-system/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    children: 'Owner',
  },
} as Meta;

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const CheckboxGroup = () => {
  return (
    <RealCheckboxGroup label="User type">
      <Checkbox value="owner">Owner</Checkbox>
      <Checkbox value="premium">Premium</Checkbox>
      <Checkbox value="power">Power</Checkbox>
    </RealCheckboxGroup>
  );
};
