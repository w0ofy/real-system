import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import type { StylishProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import type { BadgeProps, BadgeSize } from './badge.types';

const BADGE_SIZES: Record<BadgeSize, string | number> = {
  sm: 'badge-sm',
  md: 'badge',
  lg: 'badge-lg',
};

/**
 * Component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @example <Badge size="sm" colorScheme="purple">New</Badge>
 * @todo Up next: Add variants
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    children,
    colorScheme = 'gray',
    size = 'md',
    fontSize: fontSizeProp,
    ...restProps
  },
  ref
) {
  const colorProps: StylishProps = {
    bgColor: `${colorScheme}-100`,
    color: `${colorScheme}-700`,
  };
  const { fontSize, badgeSize, px } = React.useMemo(() => {
    return {
      fontSize: fontSizeProp || BADGE_SIZES[size],
      badgeSize: BADGE_SIZES[size],
      px: size === 'sm' ? 2 : 4,
    };
  }, [fontSizeProp, size]);

  return (
    <real.span
      textTransform="uppercase"
      fontScale={fontSize}
      fontWeight={badgeSize}
      letterSpacing={badgeSize}
      whiteSpace="nowrap"
      px={px}
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
