import React, { forwardRef } from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';
import { spreadStyleProps } from '@real-system/styled-library';
import { preventSpreadingStyleProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import { PinInputField } from './PinInputField';
import type { UsePinInputProps } from './types';
import {
  PinInputContextProvider,
  PinInputDescendantsProvider,
  usePinInput,
} from './usePinInput';

const PinInputProvider = ({ children, ...restProps }) => {
  const { descendants, ...context } = usePinInput(restProps);
  return (
    <PinInputDescendantsProvider value={descendants}>
      <PinInputContextProvider value={context}>
        {children}
      </PinInputContextProvider>
    </PinInputDescendantsProvider>
  );
};

type PinInputProps = UsePinInputProps &
  Omit<RealElementPrimitiveProps<'div'>, 'onChange'>;

export interface PinInputComponent
  extends React.ForwardRefExoticComponent<PinInputProps> {
  Field: typeof PinInputField;
}

// @ts-expect-error PinInput component properties are defined on the fn object after this is defined
const PinInput: PinInputComponent = forwardRef<HTMLDivElement, PinInputProps>(
  function PinInput(
    { children, 'data-testid': dataTestid, ...restProps },
    ref
  ) {
    return (
      <real.div
        display="flex"
        gap={3}
        data-testid={dataTestid || makeTestId('pin-input')}
        {...spreadStyleProps(restProps)}
        ref={ref}>
        <PinInputProvider {...preventSpreadingStyleProps(restProps)}>
          {children}
        </PinInputProvider>
      </real.div>
    );
  }
);

PinInput.Field = PinInputField;

export type { PinInputProps };
export { PinInput };
