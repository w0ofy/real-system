import { Meta } from '@storybook/react/types-6-0';

import { Box } from '@realsystem/box';

export default {
  title: 'Components/Button',
  component: Box,
  args: {
    children: 'Button',
    variant: 'mini',
  },
} as Meta;

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
