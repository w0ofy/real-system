import * as React from 'react';

import { useFocusManager } from '@real-system/a11y-library';

import type { AccordionProps } from './Accordion.model';

type AccordionItemsProps = AccordionProps;

const AccordionItems = ({
  contained,
  allowMultiple,
  allowToggle,
  children,
  defaultExpanded,
}: AccordionItemsProps) => {
  const [disclosures, setDisclosures] = React.useState<Map<number, boolean>>(
    new Map(defaultExpanded?.map((idx) => [idx, true]))
  );
  const focusManager = useFocusManager();

  const makeOnClick = React.useCallback(
    (index: number) => () => {
      const updatedDisclosures = new Map<number, boolean>(disclosures);

      if (allowToggle || allowMultiple) {
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
    ({ code }: KeyboardEvent) => {
      if (code === 'ArrowDown' || code === 'ArrowRight')
        focusManager.focusNext({ wrap: true });
      if (code === 'ArrowUp' || code === 'ArrowLeft')
        focusManager.focusPrevious({ wrap: true });
    },
    [focusManager]
  );

  const disclosureItems = React.Children.map(children, (child, index) =>
    React.cloneElement(child as React.ReactElement, {
      open: disclosures.get(index),
      setOpen: makeOnClick(index),
      onKeyDown,
      contained: Boolean(contained),
    })
  );

  return disclosureItems as unknown as JSX.Element;
};

export type { AccordionItemsProps };
export { AccordionItems };
