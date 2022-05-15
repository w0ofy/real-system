import React, { forwardRef } from 'react';

import type { BoxProps } from '@real-system/box-primitive';
import { Box } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

type FlexSpacerProps = BoxProps;

/**
 * A flex spacer that expands along the major axis of its containing flex layout.
 * It renders a `div` by default, and takes up any available space.
 *
 */
const FlexSpacer = forwardRef<HTMLElement, FlexSpacerProps>(function FlexSpacer(
  props,
  ref
) {
  return (
    <Box
      flex="1"
      justifySelf="stretch"
      alignSelf="stretch"
      data-testid={makeTestId('flex-spacer')}
      {...props}
      ref={ref}
    />
  );
});

export type { FlexSpacerProps };
export { FlexSpacer };
