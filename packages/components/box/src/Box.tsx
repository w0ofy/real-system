import React, { forwardRef } from 'react';

import {
  preventSpreadingStyleProps,
  STYLE_PROP_GROUPS,
} from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import { StyledBox } from './Box.styles';
import type { BoxProps } from './types';

const { layoutProps, spaceProps, colorProps, backgroundProps, borderProps } =
  STYLE_PROP_GROUPS;

const propConfig = Object.keys({
  ...layoutProps,
  ...spaceProps,
  ...colorProps,
  ...backgroundProps,
  ...borderProps,
}).reduce((a, b) => ({ ...a, [b]: true }), {});

const safelySpreadBoxStyleProps = (props) =>
  preventSpreadingStyleProps(props, propConfig);

const Box = forwardRef<HTMLOrSVGElement, BoxProps>(function Box(
  { children, 'data-testid': dataTestid, ...props },
  ref
) {
  return (
    <StyledBox
      data-testid={dataTestid || makeTestId('box')}
      {...safelySpreadBoxStyleProps(props)}
      ref={ref}>
      {children}
    </StyledBox>
  );
});

export { Box, safelySpreadBoxStyleProps };
