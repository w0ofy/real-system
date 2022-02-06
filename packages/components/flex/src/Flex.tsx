import React, { forwardRef, useMemo } from 'react';

import { Box, BoxProps } from '@real-system/box-primitive';
import { makeTestId } from '@real-system/utils-library';

import type { FlexProps } from './types';
import {
  getBasis,
  getDirection,
  getDisplay,
  getGrow,
  getShrink,
  getSpace,
  getWrap,
  xAlignContentToProps,
  yAlignContentToProps,
} from './utils';

const getFlexProps = (props: FlexProps): Partial<BoxProps> => ({
  flexGrow: getGrow(props),
  flexShrink: getShrink(props),
  flexBasis: getBasis(props),
  flexDirection: getDirection(props),
  flexWrap: getWrap(props),
  justifyContent: props.vertical
    ? yAlignContentToProps(props)
    : xAlignContentToProps(props),
  alignItems: props.vertical
    ? xAlignContentToProps(props)
    : yAlignContentToProps(props),
  display: getDisplay(props),
  gap: getSpace(props),
});

const Flex = forwardRef<HTMLElement, FlexProps>(function Flex(
  {
    basis,
    children,
    display = 'flex',
    xAlignContent,
    grow,
    shrink,
    vertical,
    yAlignContent,
    wrap,
    inline,
    space,
    ...restProps
  }: FlexProps,
  ref
) {
  const flexProps = useMemo(
    () =>
      getFlexProps({
        basis,
        xAlignContent,
        grow,
        shrink,
        vertical,
        yAlignContent,
        wrap,
        space,
        inline,
      }),
    [
      basis,
      xAlignContent,
      grow,
      shrink,
      vertical,
      yAlignContent,
      wrap,
      space,
      inline,
    ]
  );

  return (
    <Box
      data-testid={makeTestId('flex')}
      display={display}
      {...flexProps}
      {...restProps}
      ref={ref}>
      {children}
    </Box>
  );
});

export type { FlexProps };
export { Flex };
