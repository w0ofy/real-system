import React, { forwardRef } from 'react';

import { Box } from '@real-system/box-primitive';
import {
  RealSystemComponentProps,
  spreadStyleProps,
} from '@real-system/styling-library';
import { preventSpreadingStyleProps } from '@real-system/styling-library';
import { makeTestId } from '@real-system/utils-library';

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

type PinInputProps = UsePinInputProps & RealSystemComponentProps<'div'>;

const PinInput = forwardRef<HTMLDivElement, PinInputProps>(function PinInput(
  { children, 'data-testid': dataTestid, ...restProps },
  ref
) {
  return (
    <Box
      display="flex"
      gap={3}
      data-testid={dataTestid || makeTestId('pin-input')}
      {...spreadStyleProps(restProps)}
      ref={ref}>
      <PinInputProvider {...preventSpreadingStyleProps(restProps)}>
        {children}
      </PinInputProvider>
    </Box>
  );
});

export type { PinInputProps };
export { PinInput };
