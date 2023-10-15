import * as React from 'react';
import type { Meta } from '@storybook/react';

import { Box } from '@real-system/box';
import {
  Checkbox,
  CheckboxGroup,
  useIndeterminate,
} from '@real-system/checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  subcomponents: {
    CheckboxGroup: CheckboxGroup,
    'CheckboxGroup.Item': CheckboxGroup.Item,
  },
  args: {
    children: 'Give this user "Owner" permissions',
  },
  argTypes: {
    helpText: { type: 'string' },
    checked: { type: 'boolean' },
    required: { type: 'boolean' },
    readonly: { type: 'boolean' },
    indeterminate: { type: 'boolean' },
    hasError: { type: 'boolean' },
    disabled: { type: 'boolean' },
  },
} as Meta;

export const Default = (args) => (
  <Checkbox
    helpText="Determines if the user has permission to add, edit and delete other users"
    {...args}
  />
);

export const CheckboxGroupStory = (args) => {
  return (
    <Box display="block" width="34rem">
      <CheckboxGroup
        label="What engineering level is the new team member?"
        defaultValue={['associate']}
        helpText="Select at least 1 level for the new engineer"
        {...args}>
        <CheckboxGroup.Item value="architect">Architect</CheckboxGroup.Item>
        <CheckboxGroup.Item value="principle">Principle</CheckboxGroup.Item>
        <CheckboxGroup.Item value="staff">Staff</CheckboxGroup.Item>
        <CheckboxGroup.Item value="senior" disabled>
          Senior
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="mid" disabled>
          Mid
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="associate" disabled>
          Associate
        </CheckboxGroup.Item>
      </CheckboxGroup>
    </Box>
  );
};

CheckboxGroupStory.storyName = 'Checkbox Group';

export const Indeterminate = (args) => {
  const [checkedItems, setCheckedItems] = React.useState(['associate']);

  const indeterminateValue = 'all';
  const values = ['principle', 'staff', 'senior', 'mid', 'associate'];
  const { indeterminateProps, checkBoxGroupProps } = useIndeterminate({
    values,
    indeterminateValue,
    checkedItems,
    setCheckedItems,
  });

  return (
    <CheckboxGroup
      label="What engineering level is the new team member?"
      value={checkedItems}
      helpText="Select at least 1 level for the new engineer"
      {...args}
      {...checkBoxGroupProps}>
      <CheckboxGroup.Item value={indeterminateValue} {...indeterminateProps}>
        All
      </CheckboxGroup.Item>
      <CheckboxGroup.Item value={values[0]}>Principle</CheckboxGroup.Item>
      <CheckboxGroup.Item value={values[1]}>Staff</CheckboxGroup.Item>
      <CheckboxGroup.Item value={values[2]}>Senior</CheckboxGroup.Item>
      <CheckboxGroup.Item value={values[3]}>Mid</CheckboxGroup.Item>
      <CheckboxGroup.Item value={values[4]}>Associate</CheckboxGroup.Item>
    </CheckboxGroup>
  );
};
