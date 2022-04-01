import * as React from 'react';

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
      height="icon-xs"
      marginRight={2}
      cursor={disabled ? 'default' : cursor}>
      <Box
        {...restProps}
        as="span"
        borderRadius="circle"
        display="block"
        height="4px"
        width="4px"
        bgColor={disabled ? 'red-200' : 'red-400'}>
        <VisuallyHidden>Required: </VisuallyHidden>
      </Box>
    </Box>
  );
};

export { RequiredDot };
