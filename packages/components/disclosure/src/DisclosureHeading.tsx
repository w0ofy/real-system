import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import type {
  RealSystemComponentProps,
  ResponsiveValue,
} from '@real-system/styled-library';

type DisclosureHeadingTags = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type DisclosureHeadingProps = Omit<RealSystemComponentProps<'div'>, 'size'> & {
  as?: DisclosureHeadingTags;
  size?: ResponsiveValue<DisclosureHeadingTags | 'button'>;
};

const DisclosureHeading = ({
  children,
  as = 'h2',
  size = 'button',
  ...restProps
}: DisclosureHeadingProps) => {
  const SpecifiedHeading = real[as];
  const fontScale = size;

  return (
    <SpecifiedHeading
      margin="0"
      padding="0"
      fontScale={fontScale}
      fontWeight="inherit"
      data-disclosure-heading
      {...restProps}>
      {children}
    </SpecifiedHeading>
  );
};

export type { DisclosureHeadingProps };
export { DisclosureHeading };
