import React, { forwardRef } from 'react';

import type { Dict } from '@real-system/utils-library';
import { makeTestId } from '@real-system/utils-library';

import { StyledBox } from './Box.styles';
import type { BoxProps } from './types';

type As = BoxProps['as'];
type GivenProps = Dict;

function boxAs<T extends GivenProps>(as: As) {
  return forwardRef<HTMLOrSVGElement, BoxProps & T>(function boxAs(
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

export { boxAs };
