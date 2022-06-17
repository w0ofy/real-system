import * as React from 'react';

import type { DisclosureProps } from '@real-system/disclosure';
import type { RealSystemComponentProps } from '@real-system/styled-library';

type AccordionProps = {
  /** An array of `Disclosure` components */
  children: React.ReactNode[];
  /** Allow multiple Accordion items to be open. If `true`, item's will be toggle-able unless `allowToggle` is `false` */
  allowMultiple?: boolean;
  /** Allow each item to be toggled upon press */
  allowToggle?: boolean;
  /** Disclosures expanded by default. Keys should be the item's `index` and the value should be `true`  */
  defaultExpanded?: Record<number, boolean>;
} & Partial<Pick<DisclosureProps, 'contained'>> &
  RealSystemComponentProps<'div'>;

export type { AccordionProps };
