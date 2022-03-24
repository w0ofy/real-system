import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box-primitive';
import styled from '@real-system/styling-library';
import { useTokens } from '@real-system/theme-library';

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
 * @todo add a11y props and functionality
 */
const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(
  {
    size = 'sm',
    icon,
    intent = undefined,
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
  // eslint-disable-next-line prefer-const
  let [iconSize, iconColor] = useTokens({
    sizes: SIZE_MAP[size],
    colors: INTENT_MAP[intent || 'neutral'],
  });

  if (intent === undefined) {
    if (!restProps.color) {
      iconColor = 'currentColor';
    } else {
      iconColor = restProps.color;
    }
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
      {...restProps}>
      <StyledIcon Icon={Icon} size={iconSize} color={iconColor} />
    </Box>
  );
});

export { Icon };
export type { IconProps, Icons };
