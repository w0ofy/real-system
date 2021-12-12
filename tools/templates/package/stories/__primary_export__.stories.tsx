import React from 'react';
import { Meta } from '@storybook/react';

import { __primary_export__ } from '@real-system/__pkg__';

export default {
  title: '__pkg_type__(titleCase)s/__primary_export__(titleCase)',
  component: __primary_export__,
} as Meta;

const Template = (args) => <__primary_export__ {...args} />;

export const Default = Template.bind({});
