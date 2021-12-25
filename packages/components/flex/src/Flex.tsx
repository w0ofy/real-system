import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box';
import type { FlexboxProps, LayoutProps } from '@real-system/styling';
import { makeTestId } from '@real-system/utils';

import type { FlexProps } from './types';
import {
  getBasis,
  getDirection,
  getDisplay,
  getGrow,
  getShrink,
  getWrap,
  xAlignContentToProps,
  yAlignContentToProps,
} from './utils';

const getFlexProps = (props: FlexProps): FlexboxProps & LayoutProps => {
  return {
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
  };
};

const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(
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
        inline,
      }),
    [basis, xAlignContent, grow, shrink, vertical, yAlignContent, wrap, inline]
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
