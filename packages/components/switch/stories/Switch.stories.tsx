import * as React from 'react';
import { Meta } from '@storybook/react';

import { Switch } from '@real-system/switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked: { type: 'boolean' },
    defaultChecked: { type: 'boolean' },
    disabled: { type: 'boolean' },
    id: { type: 'string' },
    helpText: { type: 'string' },
    errorMessage: { type: 'string' },
    hasError: { type: 'boolean' },
  },
} as Meta;

const Template = (args) => <Switch>Enable notifications</Switch>;

export const Default = Template.bind({});
