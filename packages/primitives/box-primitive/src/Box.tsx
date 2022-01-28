import React, { forwardRef } from 'react';

import styled from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import { composeBoxStyleProps } from './styleProps/props';
import { getPseudoStyles } from './styleProps/pseudoPropStyles';
import type { BoxAsSVGElementProps, BoxProps } from './types';

/**
 * `Box` primitive component. Used to create all block-level styles and elements in Real System.
 */
const StyledBox = styled('div', {})<any>(
  { boxSizing: 'border-box' },
  composeBoxStyleProps(),
  getPseudoStyles
);

const Box = forwardRef<HTMLOrSVGElement, BoxProps>(function Box(
  { children, ...props },
  ref
) {
  return (
    <StyledBox {...props} ref={ref}>
      {children}
    </StyledBox>
  );
});

Box.defaultProps = { 'data-testid': makeTestId<'box'>('box') };

type As = BoxProps['as'];

function BoxAs<T = any>(as: As) {
  return forwardRef<HTMLOrSVGElement, BoxProps & T>(function BoxAs(
    props,
    ref
  ): React.ReactElement {
    return (
      <StyledBox
        as={as}
        data-testid={makeTestId<'box-as'>('box-as')}
        ref={ref}
        {...props}
      />
    );
  });
}

function BoxAsSVGElement(as: As) {
  return forwardRef<SVGElement, BoxAsSVGElementProps>(function BoxAsSVGElement(
    props,
    ref
  ): React.ReactElement {
    return (
      <StyledBox
        as={as}
        data-testid={makeTestId<'box-svg-element'>('box-svg-element')}
        ref={ref}
        {...props}
      />
    );
  });
}

export { Box, BoxAs, BoxAsSVGElement };
