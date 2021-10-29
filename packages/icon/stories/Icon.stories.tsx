import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Icon, ICONS } from '@realsystem/icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: { control: { type: 'select', options: ICONS } },
  },
  args: {
    size: 'size-icon-80',
    mr: 4,
  },
} as Meta;

const Template = (args) => (
  <>
    <Icon icon="Briefcase" intent="default" {...args} />
    <Icon icon="Box" intent="brand" {...args} />
    <Icon icon="UserCheck" intent="success" {...args} />
    <Icon icon="AlertCircle" intent="warning" {...args} />
    <Icon icon="Trash2" intent="danger" {...args} />
  </>
);
// export const Playground = (args) => <Icon {...args} />;

export const Default = Template.bind({});
