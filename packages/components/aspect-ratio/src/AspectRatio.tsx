import React, { forwardRef } from 'react';

import styled, {
  RealSystemComponentProps,
  ResponsiveValue,
} from '@real-system/styled-library';
import { makeTestId, mapResponsive } from '@real-system/utils-library';

type AspectRatioOptions = {
  /**
   * The aspect ratio of the container i.e. `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`
   */
  ratio?: ResponsiveValue<number>;
  children?: React.ReactNode;
};

type AspectRatioProps = AspectRatioOptions & RealSystemComponentProps<'div'>;

const StyledDiv = styled('div')({
  '& > *:not(style)': {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  '& > img, & > video': {
    objectFit: 'cover',
  },
});

/**
 * @name AspectRatio
 * @description Component for cropping media (videos, images and maps)
 * to a desired aspect ratio.
 */
const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  function AspectRatio({ ratio = 4 / 3, children, ...restProps }, ref) {
    // enforce single child
    const child = React.Children.only(children);

    return (
      <StyledDiv
        ref={ref}
        position="relative"
        _before={{
          height: 0,
          content: '""',
          display: 'block',
          paddingBottom: mapResponsive(ratio, (r) => `${(1 / r) * 100}%`),
        }}
        data-testid={makeTestId('aspect-ratio')}
        {...restProps}>
        {child}
      </StyledDiv>
    );
  }
);

export type { AspectRatioProps };
export { AspectRatio };
