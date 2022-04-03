import React, { forwardRef } from 'react';

import type { Dict } from '@real-system/utils-library';
import { makeTestId } from '@real-system/utils-library';

import { StyledBox } from './Box.styles';
import type { BoxProps } from './types';

type MaybeGivenProps<T> = T extends boolean ? Dict : T;
type As<T> = BoxProps['as'] | React.FunctionComponent<T>;

function boxAs<T extends Dict | false = false>(as: As<T>) {
  return forwardRef<HTMLOrSVGElement, BoxProps & MaybeGivenProps<T>>(
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
