import React from 'react';

import styled, { composeStyleProps } from '@real-system/styling';
import { makeTestId } from '@real-system/utils';

import { getPseudoStyles } from './styleFunctions';
import type { BoxProps } from './types';

const boxAttrs = (props: any) => ({
  'data-testid': props['data-testid'] || makeTestId('box'),
});

/**
 * `Box` primitive component. Used to create all block-level styles and elements in Real System.
 */
const Box = styled.div.attrs(boxAttrs)<BoxProps>(
  { boxSizing: 'border-box' },
  composeStyleProps(),
  getPseudoStyles
);

type ElementTag = keyof JSX.IntrinsicElements | React.ComponentType<any>;

function BoxAs<T>(elementTag: ElementTag) {
  return function BoxAsInnerComponent(props: BoxProps & T): React.ReactElement {
    return (
      <Box as={elementTag} data-testid={makeTestId('box-as')} {...props} />
    );
  };
}

export { Box, BoxAs };
