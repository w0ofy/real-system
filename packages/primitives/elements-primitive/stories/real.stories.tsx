import * as React from 'react';
import { Meta } from '@storybook/react';

import {
  real,
  RealElementPrimitive,
  RealElementPrimitiveProps,
} from '@real-system/elements-primitive';
import { Text } from '@real-system/typography';

export default {
  title: 'Primitives/Elements Primitive',
  component: real.div,
} as Meta;

const Template: RealElementPrimitive = (args: RealElementPrimitiveProps) => {
  return (
    <real.div padding={8} {...args} backgroundColor="gray-50">
      <Text.Code colorScheme="blue">real.div</Text.Code>
    </real.div>
  );
};

export const RealElements = Template.bind({});
