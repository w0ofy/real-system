import { Meta } from '@storybook/react/types-6-0';

import { Button } from '@realsystem/button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'mini',
  },
} as Meta;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
