import * as React from 'react';

import { useFocusManager } from '@real-system/a11y-library';
import { normalizeEventKey } from '@real-system/utils-library';

import type { AccordionProps } from './Accordion.model';

type AccordionItemsProps = AccordionProps;

const AccordionItems = ({
  contained,
  allowMultiple,
  allowToggle,
  children,
}: AccordionItemsProps) => {
  const [disclosures, setDisclosures] = React.useState<Map<number, boolean>>(
    new Map()
  );
  const focusManager = useFocusManager();

  const makeOnClick = React.useCallback(
    (index: number) => () => {
      const updatedDisclosures = new Map<number, boolean>(disclosures);

      if (allowToggle || (allowMultiple && allowToggle !== false)) {
        if (updatedDisclosures.get(index)) {
          setDisclosures(updatedDisclosures.set(index, false));
          return;
        }
      }

      if (!allowMultiple) {
        disclosures.forEach((value, key) => {
          if (value) updatedDisclosures.set(key, false);
        });
      }

      setDisclosures(updatedDisclosures.set(index, true));
    },
    [allowMultiple, allowToggle, disclosures]
  );

  const onKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      const key = normalizeEventKey({
        key: event.key,
        keyCode: event?.keyCode,
      });
      if (key === 'ArrowDown') focusManager.focusNext({ wrap: true });
      if (key === 'ArrowUp') focusManager.focusPrevious({ wrap: true });
    },
    [focusManager]
  );

  const disclosureItems = React.Children.map(children, (child, index) =>
    React.cloneElement(child as React.ReactElement, {
      visible: disclosures.get(index),
      setVisible: makeOnClick(index),
      onKeyDown,
      contained,
    })
  );

  return disclosureItems as unknown as JSX.Element;
};

export type { AccordionItemsProps };
export { AccordionItems };
