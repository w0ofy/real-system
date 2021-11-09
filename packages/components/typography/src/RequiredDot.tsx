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
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      height="size-icon-10"
      mr={2}
      cursor="pointer">
      <Box
        {...restProps}
        as="span"
        borderRadius="border-radius-circle"
        display="block"
        height="4px"
        width="4px"
        bg={disabled ? 'color-text-danger-weaker' : 'color-text-danger-weak'}>
        <VisuallyHidden>Required: </VisuallyHidden>
      </Box>
    </Box>
  );
};

export { RequiredDot };
