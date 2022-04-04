import React, { forwardRef } from 'react';

import type { Dict } from '@real-system/utils-library';
import { makeTestId } from '@real-system/utils-library';

import { StyledBox } from './Box.styles';
import type { BoxProps } from './types';

type As<GivenProps> = BoxProps<GivenProps>['as'];

function boxAs<GivenProps extends Dict = Dict>(as: As<GivenProps>) {
  return forwardRef<HTMLOrSVGElement, BoxProps<GivenProps> & GivenProps>(
    function boxAs(props, ref): React.ReactElement {
      return (
        <StyledBox
          as={as}
          data-testid={makeTestId<'box-as'>('box-as')}
          ref={ref}
          {...props}
        />
      );
    }
  );
}

export { boxAs };
