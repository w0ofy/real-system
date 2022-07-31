import React from 'react';

import { real } from '@real-system/elements-primitive';
import type {
  RealSystemChildrenProp,
  StylishProps,
} from '@real-system/styled-library';

type CheckboxTreeProps = StylishProps & RealSystemChildrenProp;

const CheckboxTree = ({ children, ...restProps }: CheckboxTreeProps) => {
  return (
    <real.span
      display="flex"
      flexDirection="column"
      flexWrap="nowrap"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={5}
      sx={{
        '& >': {
          _first: {
            marginStart: 4,
            py: 3,
            px: 4,
            backgroundColor: 'blue-50',
          },
          _notFirst: {
            marginStart: 12,
          },
        },
      }}
      {...restProps}>
      {children}
    </real.span>
  );
};

export { CheckboxTree };
