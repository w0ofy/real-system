import * as React from 'react';
import { Meta } from '@storybook/react';

import { Box } from '@real-system/box-primitive';
import {
  real,
  RealSystemElementPrimitive,
} from '@real-system/elements-primitive';

export default {
  title: 'Primitives/Elements Primitive',
  component: Box,

  argTypes: {
    as: { name: 'element', control: { type: 'select' } },
  },
} as Meta;

const Template = (args) => {
  const Element = real[args.element || 'div'] as RealSystemElementPrimitive;
  return (
    <Element fontSize={3} fontWeight={3}>
      {(args.element || 'div').toUpperCase()}
    </Element>
  );
};

export const RealElements = Template.bind({});
