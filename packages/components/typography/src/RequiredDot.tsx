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
      {...restProps}
      as="span"
      color={disabled ? 'color-text-danger-weak' : 'color-text-danger'}
      borderRadius="border-radius-circle"
      height="4px"
      width="4px"
      m={0}
      p={0}
      mr={2}>
      *<VisuallyHidden>Required: </VisuallyHidden>
    </Box>
  );
};

export { RequiredDot };
