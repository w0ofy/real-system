import * as React from 'react';

import { FocusScope } from '@real-system/a11y-library';
import { real } from '@real-system/elements-primitive';
import { makeTestId } from '@real-system/utils-library';

import type { AccordionProps } from './Accordion.model';
import { AccordionItems } from './AccordionItems';

/**
 * Accordions display a list collapsible sections, formally known as `disclosures`.
 * Use `Disclosure` components to create Accordion items.
 */
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion(
    {
      children,
      contained,
      allowMultiple,
      allowToggle,
      defaultExpanded,
      ...restProps
    },
    ref
  ) {
    return (
      <real.div
        display="flex"
        flexDirection="column"
        width="100%"
        data-testid={makeTestId('accordion')}
        {...restProps}
        ref={ref}>
        <FocusScope>
          <AccordionItems
            contained={contained}
            allowMultiple={allowMultiple}
            allowToggle={allowToggle}
            defaultExpanded={defaultExpanded}>
            {children}
          </AccordionItems>
        </FocusScope>
      </real.div>
    );
  }
);

export type { AccordionProps };
export { Accordion };
