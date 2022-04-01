import * as React from 'react';
import { Meta } from '@storybook/react';

import { Flex } from '@real-system/flex';
import { Link } from '@real-system/link';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template = (args) => (
  <Flex vertical>
    <Link href="https://system.themikewolf.com" external {...args}>
      Real System
    </Link>
    <Link href="https://system.themikewolf.com" external showExternal {...args}>
      Real System
    </Link>
  </Flex>
);

export const Default = Template.bind({});
