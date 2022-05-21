import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import type { StylishProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { BadgeProps, BadgeSize } from './badge.types';

const BADGE_SIZES: Record<BadgeSize, string | number> = {
  sm: 0,
  md: 'badge',
  lg: 2,
};

/**
 * Component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @example <Badge size="sm" colorScheme="purple">New</Badge>
 * @todo Up next: Add variants
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { children, colorScheme = 'gray', size = 'md', fontSize, ...restProps },
  ref
) {
  const colorProps: StylishProps = {
    bgColor: `${colorScheme}-100`,
    color: `${colorScheme}-700`,
  };
  const badgeSize = fontSize || BADGE_SIZES[size];

  return (
    <real.span
      textTransform="uppercase"
      fontSize={badgeSize}
      lineHeight={badgeSize}
      fontWeight={4}
      whiteSpace="nowrap"
      paddingInlineStart={4}
      paddingInlineEnd={4}
      paddingY={1}
      borderRadius={3}
      data-testid={makeTestId('badge')}
      {...colorProps}
      {...restProps}
      ref={ref}>
      {children}
    </real.span>
  );
});

export { Badge };
