import React, { forwardRef } from 'react';

import type { StyledComponent } from '@real-system/styling';
import styled from '@real-system/styling';
import { makeTestId } from '@real-system/utils';

import { getPseudoStyles } from './styleFunctions';
import { composeBoxStyleProps } from './styleProps';
import type { BoxProps } from './types';

/**
 * `Box` primitive component. Used to create all block-level styles and elements in Real System.
 */
const StyledBox = styled.div<BoxProps>(
  { boxSizing: 'border-box' },
  composeBoxStyleProps(),
  getPseudoStyles
) as StyledComponent<
  Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLOrSVGElement>,
      HTMLOrSVGElement
    >,
    'color'
  >,
  BoxProps,
  Record<string, unknown>
>;

const Box = forwardRef<HTMLOrSVGElement, BoxProps>(function Box(
  { children, ...props },
  ref
) {
  return (
    <StyledBox ref={ref} {...props}>
      {children}
    </StyledBox>
  );
});

Box.defaultProps = { 'data-testid': makeTestId('box') };

type As = BoxProps['as'];

function BoxAs<T = Record<string | number, any>>(as: As) {
  return forwardRef<HTMLOrSVGElement, BoxProps & T>(function BoxAsComponent(
    props,
    ref
  ): React.ReactElement {
    return (
      <Box as={as} data-testid={makeTestId('box-as')} ref={ref} {...props} />
    );
  });
}

export { Box, BoxAs };
