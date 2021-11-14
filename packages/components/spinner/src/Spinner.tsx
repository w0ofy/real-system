import * as React from 'react';

import { Box } from '@real-system/box';
import { useUID } from '@real-system/utils';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { circleGeometry } from './constants';
import { useDelay } from './hooks';
import { sizes, SpinnerSvg, SvgGroup, Track, TrailingWheel } from './styles';
import { SpinnerProps } from './types';

/**
 * @todo refactor to use an icon wrapper w/ a11y in mind
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
  {
    size = 'md',
    title = 'Loading',
    as = 'span',
    display = 'flex',
    color = 'color-text',
    delay = 250,
    ...restProps
  },
  ref
) {
  const sizeStyles = sizes[size];
  const titleId = useUID();
  const visible = useDelay(delay);
  return (
    <Box
      as={as}
      position="relative"
      display={display}
      size={sizeStyles.size}
      ref={ref}
      color={color}
      {...restProps}>
      <SpinnerSvg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <SvgGroup strokeWidth={sizeStyles.borderWidth as string}>
          <Track {...circleGeometry} />
          <TrailingWheel visible={visible} {...circleGeometry} />
        </SvgGroup>
      </SpinnerSvg>

      <VisuallyHidden>{title}</VisuallyHidden>
    </Box>
  );
});

export { Spinner };
export type { SpinnerProps };
