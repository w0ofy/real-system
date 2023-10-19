import * as React from 'react';
import type { Meta } from '@storybook/react';

import { Accordion } from '@real-system/accordion';
import { Disclosure } from '@real-system/disclosure';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const AccordionItem = (props) => (
  <Disclosure {...props}>
    <Disclosure.Toggle>Toggle</Disclosure.Toggle>
    <Disclosure.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Disclosure.Content>
  </Disclosure>
);

export const Default = (args) => (
  <Accordion {...args}>
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
  </Accordion>
);

export const ContainedAccordion = (args) => (
  <Accordion {...args} contained>
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
  </Accordion>
);

export const AllowMultiple = (args) => (
  <Accordion {...args} allowMultiple>
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
  </Accordion>
);

export const DefaultExpanded = (args) => (
  <Accordion {...args} defaultExpanded={[1]}>
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
  </Accordion>
);
