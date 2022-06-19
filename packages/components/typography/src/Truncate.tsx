import * as React from 'react';

import { real } from '@real-system/elements-primitive';
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
      <real.span
        data-testid={makeTestId('truncate')}
        {...restProps}
        ref={ref}
        display="inline-block"
        maxWidth="100%"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap">
        {children}
      </real.span>
    );
  }
);

export type { TruncateProps };
export { Truncate };
