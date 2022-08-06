import * as React from 'react';

import { useDisclosureStatePrimitive } from '@real-system/disclosure-primitive';
import { real } from '@real-system/elements-primitive';
import type { RenderProp } from '@real-system/styled-library';
import type { Func } from '@real-system/utils-library';
import { isFunction, makeTestId } from '@real-system/utils-library';

import type {
  DisclosureContext,
  DisclosureStateProps,
} from './DisclosureContext';
import { DisclosureContextProvider } from './DisclosureContext';

type DisclosureProps = {
  children: RenderProp<DisclosureContext> | React.ReactNode;
} & DisclosureStateProps;

const Disclosure = ({
  children: childrenProp,
  contained = false,
  ...restProps
}: DisclosureProps) => {
  const state = useDisclosureStatePrimitive({
    ...restProps,
    animated: true,
  });
  const children = React.useMemo(() => {
    if (isFunction(childrenProp)) {
      const childrenFn = childrenProp as Func;
      return childrenFn({ state, contained });
    }
    return childrenProp;
  }, [childrenProp, state, contained]);

  return (
    <DisclosureContextProvider state={state} contained={contained}>
      <real.div
        data-testid={makeTestId('disclosure')}
        _firstAndNotOnly={{
          '& > [data-disclosure-heading] > [data-disclosure-trigger]': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        }}
        _notFirstOrLast={{
          '& > [data-disclosure-heading] > [data-disclosure-trigger]': {
            borderTop: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
        _lastAndNotOnly={{
          '& > [data-disclosure-heading] > [data-disclosure-trigger]': {
            borderTop: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
        {...restProps}>
        {children}
      </real.div>
    </DisclosureContextProvider>
  );
};

export type { DisclosureProps };
export { Disclosure };
