import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import { RealSystemComponentProps } from '@real-system/styled-library';

type StackDividerProps = RealSystemComponentProps<'div'>;

const StackDivider = React.forwardRef(function StackDivider(props) {
  return (
    <real.div
      borderWidth="0"
      alignSelf="stretch"
      borderColor="inherit"
      width="auto"
      height="auto"
      {...props}
    />
  );
});

export type { StackDividerProps };
export { StackDivider };
