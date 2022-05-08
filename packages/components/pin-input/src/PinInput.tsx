import React, { forwardRef } from 'react';

import { FocusScope } from '@real-system/a11y-library';
import { Box } from '@real-system/box-primitive';
import type { RealSystemComponentProps } from '@real-system/styling-library';
import {
  preventSpreadingStyleProps,
  spreadStyleProps,
} from '@real-system/styling-library';

import type { UsePinInputProps } from './types';
import {
  PinInputDescendantsProvider,
  PinInputProvider,
  usePinInput,
} from './usePinInput';

const FocusProvider = ({ children }) => {
  return <FocusScope>{children}</FocusScope>;
};

const PinInputProviders = ({ children, ...restProps }) => {
  const { descendants, ...context } = usePinInput(restProps);
  return (
    <PinInputDescendantsProvider value={descendants}>
      <PinInputProvider value={context}>{children}</PinInputProvider>
    </PinInputDescendantsProvider>
  );
};

type PinInputProps = UsePinInputProps & RealSystemComponentProps<'div'>;

const PinInput = forwardRef<HTMLDivElement, PinInputProps>(function PinInput(
  { children, ...restProps },
  ref
) {
  return (
    <Box display="flex" gap={3} {...spreadStyleProps(restProps)} ref={ref}>
      <FocusProvider>
        <PinInputProviders {...preventSpreadingStyleProps(restProps)}>
          {children}
        </PinInputProviders>
      </FocusProvider>
    </Box>
  );
});

export type { PinInputProps };
export { PinInput };
