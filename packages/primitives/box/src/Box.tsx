import React from 'react';

import type { StyledComponent } from '@real-system/styling';
import styled from '@real-system/styling';
import { fns } from '@real-system/utils';

import { getPseudoStyles } from './styleFunctions';
import { composeBoxStyleProps } from './styleProps';
import type { BoxProps } from './types';

console.log(styled);

/**
 * `Box` primitive component. Used to create all block-level styles and elements in Real System.
 */
const StyledBox = styled.div<BoxProps>(
  { boxSizing: 'border-box' },
  composeBoxStyleProps(),
  getPseudoStyles
) as StyledComponent<
  Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    'color'
  >,
  BoxProps,
  Record<string, unknown>
>;

const Box = React.forwardRef<HTMLElement, BoxProps>(function Box(
  { children, element = 'BOX', ...props },
  ref
) {
  return (
    <StyledBox data-paste-element={element} ref={ref} {...props}>
      {children}
    </StyledBox>
  );
});

Box.defaultProps = { 'data-testid': fns.makeTestId('box') };

type ElTag = keyof JSX.IntrinsicElements | React.ComponentType<any>;

function BoxAs<T>(elTag: ElTag) {
  return function BoxAsComponent(props: BoxProps & T): React.ReactElement {
    return <Box as={elTag} data-testid={fns.makeTestId('box-as')} {...props} />;
  };
}

export { Box, BoxAs };
