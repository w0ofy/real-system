import * as React from 'react';

import type { BoxProps } from '@real-system/box';
import { Box } from '@real-system/box';
import { VisuallyHidden } from '@real-system/visually-hidden';

export type RequiredDotProps = {
  disabled: boolean | undefined;
} & BoxProps;

const RequiredDot = ({
  disabled = false,
  ...restProps
}: RequiredDotProps): React.ReactElement => {
  return (
    <Box
      as="span"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="size-icon-10"
      mr={3}
      cursor={disabled ? 'not-allowed' : 'pointer'}>
      <Box
        {...restProps}
        as="span"
        borderRadius="border-radius-circle"
        display="block"
        height="4px"
        width="4px"
        bg={disabled ? 'color-text-danger-weak-6' : 'color-text-danger-weak-3'}>
        <VisuallyHidden>Required: </VisuallyHidden>
      </Box>
    </Box>
  );
};

export { RequiredDot };
