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
    <RealCheckboxGroup label="Engineering level" defaultValue={['associate']}>
      <Checkbox value="architect">Architect</Checkbox>
      <Checkbox value="principle">Principle</Checkbox>
      <Checkbox value="staff">Staff</Checkbox>
      <Checkbox value="senior" isDisabled>
        Senior
      </Checkbox>
      <Checkbox value="mid" isDisabled>
        Mid
      </Checkbox>
      <Checkbox value="associate" isDisabled>
        Associate
      </Checkbox>
    </RealCheckboxGroup>
  );
};
