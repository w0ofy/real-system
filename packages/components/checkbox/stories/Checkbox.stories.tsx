import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import { Checkbox } from '@real-system/checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  subcomponents: {
    CheckboxGroup: Checkbox.Group,
    CheckboxGroupLabel: Checkbox.GroupLabel,
    CheckboxTree: Checkbox.Tree,
  },
  args: {
    children: 'Give this user "Owner" permissions',
  },
  argTypes: {
    required: { type: 'boolean' },
  },
} as Meta;

export const Default = () => {
  return <Checkbox>I agree to Real System's terms and conditions</Checkbox>;
};

export const WithHelperText = () => {
  return (
    <Checkbox helperText="Not to worry, there's no fine print">
      I agree to Real System's terms and conditions
    </Checkbox>
  );
};

export const CheckboxGroupStory = () => {
  const [value, setValue] = React.useState<string[]>([]);
  const items = ['apple', 'pear', 'grape', 'honeydew'];
  return (
    <Checkbox.Group
      items={items}
      value={value}
      onChange={(val) => setValue(val)}>
      <Checkbox.GroupLabel>Choose your favorite fruits</Checkbox.GroupLabel>
      <Checkbox value={items[0]} helperText="yummy">
        Apple
      </Checkbox>
      <Checkbox value={items[1]} helperText="yummier">
        Pear
      </Checkbox>
      <Checkbox value={items[2]} helperText="yummyier-er">
        Grape
      </Checkbox>
      <Checkbox value={items[3]} helperText="yummiest">
        Honeydew
      </Checkbox>
    </Checkbox.Group>
  );
};

CheckboxGroupStory.storyName = 'Checkbox Group';

export const Indeterminate = (args) => {
  const items = ['principle', 'staff', 'senior', 'mid', 'associate'];

  return (
    <Checkbox.Group items={items} required>
      <Checkbox.GroupLabel helperText="Select at least 1 level to describe your engineering team">
        What level of engineering does your team include?
      </Checkbox.GroupLabel>
      <Checkbox indeterminate>All</Checkbox>
      <Checkbox value={items[0]}>Principle</Checkbox>
      <Checkbox value={items[1]}>Staff</Checkbox>
      <Checkbox value={items[2]}>Senior</Checkbox>
      <Checkbox value={items[3]}>Mid</Checkbox>
      <Checkbox value={items[4]}>Associate</Checkbox>
    </Checkbox.Group>
  );
};

export const IndeterminateTree = (args) => {
  const [checkedItems, setCheckedItems] = React.useState(['associate']);

  const items = ['principle', 'staff', 'senior', 'mid', 'associate'];

  const handleOnChange = (value) => {
    action('onChange', { clearOnStoryChange: true });
    setCheckedItems(value);
  };
  return (
    <Checkbox.Group
      items={items}
      onChange={handleOnChange}
      value={checkedItems}
      defaultValue={['associate']}
      {...args}>
      <Checkbox.GroupLabel
        helperText="Select at least 1 level to describe your engineering team
">
        What level of engineering does your team include?
      </Checkbox.GroupLabel>
      <Checkbox.Tree>
        <Checkbox indeterminate>All</Checkbox>
        <Checkbox value={items[0]}>Principle</Checkbox>
        <Checkbox value={items[1]}>Staff</Checkbox>
        <Checkbox value={items[2]}>Senior</Checkbox>
        <Checkbox value={items[3]}>Mid</Checkbox>
        <Checkbox value={items[4]}>Associate</Checkbox>
      </Checkbox.Tree>
    </Checkbox.Group>
  );
};

export const IndeterminateControlled = (args) => {
  const [checkedItems, setCheckedItems] = React.useState(['associate']);

  const items = ['principle', 'staff', 'senior', 'mid', 'associate'];

  return (
    <Checkbox.Group
      items={items}
      onChange={setCheckedItems}
      value={checkedItems}
      defaultValue={['associate']}
      {...args}>
      <Checkbox.GroupLabel helperText="Select at least 1 level to describe your engineering team">
        What level of engineering does your team include?
      </Checkbox.GroupLabel>
      <Checkbox indeterminate>All</Checkbox>
      <Checkbox value={items[0]}>Principle</Checkbox>
      <Checkbox value={items[1]}>Staff</Checkbox>
      <Checkbox value={items[2]}>Senior</Checkbox>
      <Checkbox value={items[3]}>Mid</Checkbox>
      <Checkbox value={items[4]}>Associate</Checkbox>
    </Checkbox.Group>
  );
};
