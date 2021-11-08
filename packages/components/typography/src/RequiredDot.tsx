import * as React from 'react';

import type { BoxProps } from '@real-system/box';
import { Box } from '@real-system/box';
import { VisuallyHidden } from '@real-system/visually-hidden';

const RequiredDot = (props: BoxProps): React.ReactElement => {
  return (
    <Box
      {...props}
      as="span"
      color={props.color}
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
