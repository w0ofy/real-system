import type * as React from 'react';

import type { DisclosureProps } from '@real-system/disclosure';
import type { RealSystemComponentProps } from '@real-system/styled-library';

type CustomProps = {
  /** An array of `Disclosure` components */
  children: React.ReactNode[];
  /** Allow multiple Accordion items to be open. If `true`, item's will also be toggle-able */
  allowMultiple?: boolean;
  /**
   * Allow each item to be toggled upon press
   * @default true
   */
  allowToggle?: boolean;
  /** Disclosures expanded by default. Keys should be the item's `index` and the value should be `true`  */
  defaultExpanded?: number[];
} & Partial<Pick<DisclosureProps, 'contained'>>;

type AccordionProps = CustomProps & RealSystemComponentProps<'div'>;

type AccordionItemProps = Partial<CustomProps> & RealSystemComponentProps;

export type { AccordionItemProps, AccordionProps };
