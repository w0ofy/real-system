import * as React from 'react';

import { Box } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

type TruncateProps = Omit<
  React.HtmlHTMLAttributes<HTMLSpanElement>,
  'color'
> & {
  children: NonNullable<React.ReactNode>;
  title: string;
};

const Truncate = React.forwardRef<HTMLSpanElement, TruncateProps>(
  function Truncate({ children, ...restProps }, ref) {
    return (
      <Box
        data-testid={makeTestId('truncate')}
        {...restProps}
        ref={ref}
        as="span"
        display="inline-block"
        maxWidth="100%"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap">
        {children}
      </Box>
    );
  }
);

export type { TruncateProps };
export { Truncate };
