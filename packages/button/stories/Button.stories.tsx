import { Meta } from '@storybook/react/types-6-0';

import { Button } from '@realsystem/core/button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
  },
} as Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = (args) => <Button {...args} variant="secondary" />;

Secondary.title = 'Components/Button/Variants/Secondary';
