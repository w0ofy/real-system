import * as React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box';
import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupItem,
  useIndeterminate,
} from '@real-system/checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  subcomponents: { CheckboxGroup: CheckboxGroup, CheckboxGroupItem },
  args: {
    children: 'Give this user "Owner" permissions',
    invalid: { status: false, message: "There's an error here" },
  },
  argTypes: {
    helperText: { type: 'string' },
    checked: { type: 'boolean' },
    required: { type: 'boolean' },
    readonly: { type: 'boolean' },
    indeterminate: { type: 'boolean' },
    disabled: { type: 'boolean' },
  },
} as Meta;

export const Default = (args) => (
  <Checkbox
    helperText="Determines if the user has permission to add, edit and delete other users"
    {...args}
  />
);

export const CheckboxGroupStory = (args) => {
  return (
    <Box display="block" width="34rem">
      <CheckboxGroup
        label="What engineering level is the new team member?"
        defaultValue={['associate']}
        helperText="Select at least 1 level for the new engineer"
        {...args}>
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
      helperText="Select at least 1 level for the new engineer"
      {...args}
      {...checkBoxGroupProps}>
      <CheckboxGroupItem value={indeterminateValue} {...indeterminateProps}>
        All
      </CheckboxGroupItem>
      <CheckboxGroupItem value={values[0]}>Principle</CheckboxGroupItem>
      <CheckboxGroupItem value={values[1]}>Staff</CheckboxGroupItem>
      <CheckboxGroupItem value={values[2]}>Senior</CheckboxGroupItem>
      <CheckboxGroupItem value={values[3]}>Mid</CheckboxGroupItem>
      <CheckboxGroupItem value={values[4]}>Associate</CheckboxGroupItem>
    </CheckboxGroup>
  );
};
