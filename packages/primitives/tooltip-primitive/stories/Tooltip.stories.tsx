import * as React from 'react';
import type { Meta } from '@storybook/react';

import { Button } from '@real-system/button';
import {
  TooltipAnchorPrimitive,
  TooltipPrimitive,
  useTooltipStatePrimitive,
} from '@real-system/tooltip-primitive';

export default {
  title: 'Primitives/Tooltip Primitive',
  component: TooltipPrimitive,
  subcomponents: {
    TooltipAnchorPrimitive,
  },
} as Meta;

const Template = () => {
  const tooltip = useTooltipStatePrimitive();
  return (
    <>
      <TooltipAnchorPrimitive state={tooltip} as={Button}>
        Hover or focus on me
      </TooltipAnchorPrimitive>
      <TooltipPrimitive state={tooltip}>Tooltip</TooltipPrimitive>
    </>
  );
};

export const Default = Template.bind({});
