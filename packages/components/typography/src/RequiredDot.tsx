import React from 'react';

import type { BoxProps } from '@real-system/box-primitive';
import { Box } from '@real-system/box-primitive';
import { VisuallyHidden } from '@real-system/visually-hidden';

export type RequiredDotProps = {
  disabled: boolean | undefined;
} & BoxProps;

const RequiredDot = ({
  disabled = false,
  cursor = 'pointer',
  ...restProps
}: RequiredDotProps): React.ReactElement => {
  return (
    <Box
      as="span"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="icon-2"
      marginRight={2}
      cursor={disabled ? 'not-allowed' : cursor}>
      <Box
        {...restProps}
        as="span"
        borderRadius="border-radius-circle"
        display="block"
        height="4px"
        width="4px"
        bgColor={
          disabled
            ? 'color-background-danger-weak-6'
            : 'color-background-danger-weak-3'
        }>
        <VisuallyHidden>Required: </VisuallyHidden>
      </Box>
    </Box>
  );
};

export { RequiredDot };
