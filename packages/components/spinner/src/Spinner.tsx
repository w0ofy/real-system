import * as React from 'react';

import { real } from '@real-system/elements-primitive';
import { useUID } from '@real-system/utils-library';

import { circleCircumference, circleGeometry } from './constants';
import { useDelay } from './hooks';
import {
  SpinnerSVG,
  STYLES_BY_SIZE,
  SvgGroup,
  TrackCircle,
  WheelCircle,
} from './Spinner.styles';
import { SpinnerProps } from './types';

/**
 * @todo refactor to use an icon wrapper w/ a11y in mind i.e. decorative + aria-hidden
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
  {
    size = 'md',
    title = 'Loading',
    as = 'span',
    display = 'flex',
    color = 'gray-500',
    delay = 250,
    ...restProps
  },
  ref
) {
  const sizeStyles = STYLES_BY_SIZE[size];
  const titleId = useUID();
  const isVisible = useDelay(delay);
  return (
    <real.span
      as={as}
      display={display}
      {...restProps}
      position="relative"
      size={sizeStyles.size}
      ref={ref}
      color={color}>
      <SpinnerSVG
        display="block"
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <SvgGroup
          stroke="currentColor"
          strokeLinecap="round"
          fill="transparent"
          strokeWidth={sizeStyles.borderWidth as string}>
          <TrackCircle
            transformOrigin="center"
            {...circleGeometry}
            opacity={isVisible ? 0.25 : 0}
          />
          <WheelCircle
            transformOrigin="center"
            strokeDasharray={circleCircumference}
            opacity={isVisible ? 1 : 0}
            {...circleGeometry}
          />
        </SvgGroup>
      </SpinnerSVG>
    </real.span>
  );
});

export { Spinner };
export type { SpinnerProps };
