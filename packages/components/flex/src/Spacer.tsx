import React, { forwardRef } from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';
import { makeTestId } from '@real-system/utils-library';

type FlexSpacerProps = RealElementPrimitiveProps<'div'>;

/**
 * A flex spacer that expands along the major axis of its containing `Flex` layout.
 * It renders a `div` and takes up any available space.
 */
const FlexSpacer = forwardRef<HTMLElement, FlexSpacerProps>(function FlexSpacer(
  props,
  ref
) {
  return (
    <real.div
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
