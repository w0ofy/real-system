import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import type { RealSystemComponentProps } from '@real-system/styled-library';

type StackItemProps = RealSystemComponentProps<'div'>;

const StackItem = React.forwardRef(function StackItem(props: StackItemProps) {
  return (
    <real.div display="inline-block" flex="0 0 auto" minWidth="0" {...props} />
  );
});

export type { StackItemProps };
export { StackItem };
