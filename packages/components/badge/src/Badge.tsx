import * as React from 'react';

import { Box } from '@real-system/box-primitive';
import type { StylishProps } from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import { BadgeProps } from './badge.types';

const BADGE_SIZES = {
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
const Badge = ({
  children,
  colorScheme = 'gray',
  size = 'md',
  fontSize,
  ...restProps
}: BadgeProps) => {
  const colorProps: StylishProps = {
    bgColor: `${colorScheme}-100`,
    color: `${colorScheme}-700`,
  };
  const badgeSize = fontSize || BADGE_SIZES[size];

  return (
    <Box
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
      as="span">
      {children}
    </Box>
  );
};

export { Badge };
