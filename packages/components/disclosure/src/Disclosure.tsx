import * as React from 'react';

import { useDisclosureStorePrimitive } from '@real-system/disclosure-primitive';
import { real } from '@real-system/elements-primitive';
import type { RenderProp } from '@real-system/styled-library';
import type { Func } from '@real-system/utils-library';
import { isFunction, makeTestId } from '@real-system/utils-library';

import { DisclosureContent } from './DisclosureContent';
import type {
  DisclosureContext,
  DisclosureStoreProps,
} from './DisclosureContext';
import { DisclosureContextProvider } from './DisclosureContext';
import { DisclosureHeading } from './DisclosureHeading';
import { DisclosureToggle } from './DisclosureToggle';
import { DisclosureTrigger } from './DisclosureTrigger';

type DisclosureProps = {
  children: RenderProp<DisclosureContext> | React.ReactNode;
} & Omit<DisclosureStoreProps, 'animated'>;

const TRIGGER_CSS_SELECTOR =
  '& > [data-disclosure-trigger], & > [data-disclosure-content]';

const Disclosure = ({
  children: renderPropOrChildren,
  contained = false,
  ...restProps
}: DisclosureProps) => {
  const store = useDisclosureStorePrimitive({
    ...restProps,
    animated: true,
  });

  const children = React.useMemo(() => {
    if (isFunction(renderPropOrChildren)) {
      const childrenFn = renderPropOrChildren as Func;
      return childrenFn({ store, contained });
    }
    return renderPropOrChildren;
  }, [renderPropOrChildren, store, contained]);

  return (
    <DisclosureContextProvider store={store} contained={contained}>
      <real.div
        data-testid={makeTestId('disclosure')}
        _firstAndNotOnly={{
          [TRIGGER_CSS_SELECTOR]: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        }}
        _notFirstOrLast={{
          [TRIGGER_CSS_SELECTOR]: {
            borderTop: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
        _lastAndNotOnly={{
          [TRIGGER_CSS_SELECTOR]: {
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

Disclosure.Content = DisclosureContent;
Disclosure.Heading = DisclosureHeading;
Disclosure.Toggle = DisclosureToggle;
Disclosure.Primitives = {
  Heading: DisclosureHeading,
  Trigger: DisclosureTrigger,
};

export type { DisclosureProps };
export { Disclosure };
