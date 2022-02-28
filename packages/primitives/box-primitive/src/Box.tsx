import React, { forwardRef } from 'react';

import styled, {
  getPseudoStyleProps,
  getStyleProps,
} from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

import type { BoxProps } from './types';

/**
 * `Box` primitive component. Used to create all elements in Real System. Use `Box` to create custom components on top of Real System components.
 */
const StyledBox = styled('div', {})<any>(
  { boxSizing: 'border-box' },
  getStyleProps,
  getPseudoStyleProps
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
type GivenProps = { [key: string]: any };

function BoxAs<T extends GivenProps>(as: As) {
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

export { Box, BoxAs };
