import * as React from 'react';
import { Meta } from '@storybook/react';

import { Link } from '@real-system/link';
import { Switch } from '@real-system/switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    on: { type: 'boolean' },
    defaultOn: { type: 'boolean' },
    disabled: { type: 'boolean' },
    id: { type: 'string' },
    helpText: { type: 'string' },
  },
} as Meta;

export const Default = (args) => (
  <Switch {...args}>Enable notifications</Switch>
);

export const Controlled = () => {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <Switch on={isOn} onClick={() => setIsOn((prev) => !prev)}>
      Enable notifications
    </Switch>
  );
};

export const HelpText = () => {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <Switch
      on={isOn}
      onClick={() => setIsOn((prev) => !prev)}
      helpText="SMS push notifications">
      Enable notifications
    </Switch>
  );
};

export const LinkHelpText = () => {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <Switch
      on={isOn}
      onClick={() => setIsOn((prev) => !prev)}
      helpText={
        <Link href="https://system.themikewolf.com" external showExternal>
          Read more about the Notification Program
        </Link>
      }>
      Enroll in Notification Program
    </Switch>
  );
};
