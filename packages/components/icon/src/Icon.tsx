import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box';
import styled from '@real-system/styling';
import { ThemeTokens, useToken } from '@real-system/theme';

import { OutlineIcons, SolidIcons } from './icons';
import { IconIntent, IconProps, Icons, InternalIconProps } from './types';

const INTENT_MAP: { [key in IconIntent]: ThemeTokens } = {
  default: 'color-text',
  primary: 'color-text-brand',
  success: 'color-text-success',
  danger: 'color-text-danger',
  warning: 'color-text-warning',
  info: 'color-text-info',
};

const StyledIcon = styled(({ Icon, ...restProps }: InternalIconProps) => {
  return <Icon {...(restProps as any)} />;
})<InternalIconProps>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  color: ${({ intent }) => intent};
`;

/**
 * @todo add a11y props and functionnality
 */
const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(
  {
    size = 'size-icon-30',
    icon,
    intent,
    solid = false,
    title = icon,
    ...restProps
  },
  ref
) {
  const Icon = useMemo(
    () => (solid ? SolidIcons[icon] : OutlineIcons[icon]),
    [icon, solid]
  );
  const iconSize = useToken(size, 'sizes');
  let iconIntent = useToken(INTENT_MAP[intent || 'default']);
  if (!intent) {
    iconIntent = 'currentColor';
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
      <StyledIcon Icon={Icon} size={iconSize} intent={iconIntent} />
    </Box>
  );
});

export { Icon };
export type { IconProps, Icons };
