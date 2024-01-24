import * as React from 'react';
import type { Meta } from '@storybook/react';

import { Box } from '@real-system/box';
import {
  TooltipAnchorPrimitive,
  TooltipArrowPrimitive,
  TooltipPrimitive,
  TooltipProviderPrimitive,
} from '@real-system/tooltip-primitive';

export default {
  title: 'Primitives/Tooltip Primitive',
  component: TooltipPrimitive,
  subcomponents: {
    TooltipAnchorPrimitive,
  },
} as Meta;

const Template = () => {
  return (
    <TooltipProviderPrimitive placement="top">
      <TooltipAnchorPrimitive render={<a href="#" />}>
        Hover or focus on me
      </TooltipAnchorPrimitive>
      <TooltipPrimitive>
        <TooltipArrowPrimitive size={0} />
        <Box bgColor="black" color="white" p={3} borderRadius="md">
          Tooltip
        </Box>
      </TooltipPrimitive>
    </TooltipProviderPrimitive>
  );
};

export const Default = Template.bind({});
