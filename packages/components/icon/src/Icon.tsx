import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box';
import styled from '@real-system/styling';
import { useToken } from '@real-system/theme';

import { INTENT_MAP, SIZE_MAP } from './constants';
import { OutlineIcons, SolidIcons } from './icons';
import { IconProps, Icons, InternalIconProps } from './types';

const StyledIcon = styled(({ Icon, ...restProps }: InternalIconProps) => {
  return <Icon {...(restProps as any)} />;
})<InternalIconProps>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  color: ${({ color }) => color};
`;

/**
 * @todo add a11y props and functionnality
 */
const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(
  { size = 'sm', icon, intent, solid = false, title = icon, ...restProps },
  ref
) {
  const Icon = useMemo(
    () => (solid ? SolidIcons[icon] : OutlineIcons[icon]),
    [icon, solid]
  );
  const iconSize = useToken(SIZE_MAP[size], 'sizes');
  let iconColor = useToken(INTENT_MAP[intent || 'default']);
  if (!intent) {
    iconColor = 'currentColor';
  }

  return (
    <Box
      ref={ref}
      as="span"
      display="flex"
      flexShrink={0}
      flexGrow={0}
      width={iconSize}
      height={iconSize}
      title={title}
      _focus={{
        outline: '2px solid',
        outlineColor: 'color-border-primary',
      }}
      {...restProps}>
      <StyledIcon Icon={Icon} size={iconSize} color={iconColor} />
    </Box>
  );
});

export { Icon };
export type { IconProps, Icons };
