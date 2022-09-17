import * as React from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';
import { VisuallyHidden } from '@real-system/visually-hidden';

type RequiredDotProps = {
  disabled: boolean | undefined;
} & RealElementPrimitiveProps<'span'>;

const RequiredDot = ({
  disabled = false,
  ...restProps
}: RequiredDotProps): React.ReactElement => {
  return (
    <real.span
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="icon-xs"
      marginRight={2}
      cursor={disabled ? 'default' : 'default'}>
      <real.span
        {...restProps}
        borderRadius="circle"
        display="block"
        height="4px"
        width="4px"
        bgColor={disabled ? 'red-200' : 'red-400'}>
        <VisuallyHidden>Required: </VisuallyHidden>
      </real.span>
    </real.span>
  );
};

export { RequiredDot };
