import React from 'react';
import { Meta } from '@storybook/react';

import {
  Checkbox,
  CheckboxGroup as RealCheckboxGroup,
  CheckboxGroupItem,
} from '@real-system/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  subcomponents: { CheckboxGroup: RealCheckboxGroup, CheckboxGroupItem },
  args: {
    children: 'Owner',
  },
} as Meta;

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const CheckboxGroup = () => {
  return (
    <RealCheckboxGroup label="Engineering level" defaultValue={['associate']}>
      <CheckboxGroupItem value="architect">Architect</CheckboxGroupItem>
      <CheckboxGroupItem value="principle">Principle</CheckboxGroupItem>
      <CheckboxGroupItem value="staff">Staff</CheckboxGroupItem>
      <CheckboxGroupItem value="senior" disabled>
        Senior
      </CheckboxGroupItem>
      <CheckboxGroupItem value="mid" disabled>
        Mid
      </CheckboxGroupItem>
      <CheckboxGroupItem value="associate" disabled>
        Associate
      </CheckboxGroupItem>
    </RealCheckboxGroup>
  );
};
