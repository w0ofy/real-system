import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import type { RealSystemComponentProps } from '@real-system/styled-library';

type StackSeparatorProps = RealSystemComponentProps<'div'>;

const StackSeparator = React.forwardRef<HTMLDivElement, StackSeparatorProps>(
  function StackSeparator(props, ref) {
    return (
      <real.div
        borderWidth="0"
        borderStyle="solid"
        alignSelf="stretch"
        borderColor="inherit"
        width="auto"
        height="auto"
        {...props}
        ref={ref}
      />
    );
  }
);

export type { StackSeparatorProps };
export { StackSeparator };
