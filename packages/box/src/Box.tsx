import React from 'react';

import styled, { composeStyleProps } from '@real-system/styling';
import { makeTestId } from '@real-system/utils';

import { getPseudoStyles } from './styleFunctions';
import type { BoxProps } from './types';

const boxAttrs = (props: any) => ({
  'data-testid': props['data-testid'] || makeTestId('box'),
});

/**
 * Use `Box` to create other components
 */
const Box = styled.div.attrs(boxAttrs)<BoxProps>(
  { boxSizing: 'border-box' },
  composeStyleProps(),
  getPseudoStyles
);

type Element = keyof JSX.IntrinsicElements | React.ComponentType<any>;

function BoxAs<T>(element: Element) {
  return function BoxAsInnerComponent(props: BoxProps & T): React.ReactElement {
    return (
      <Box
        forwardedAs={element}
        data-testid={makeTestId('box-as')}
        {...props}
      />
    );
  };
}

export { Box, BoxAs };
