import * as React from 'react';
import { Meta } from '@storybook/react';

import { Accordion } from '@real-system/accordion';
import {
  Disclosure as RealDisclosure,
  DisclosureContent,
  DisclosureHeading,
  DisclosureToggle,
  DisclosureTrigger,
} from '@real-system/disclosure';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: {
    Disclosure: RealDisclosure,
    DisclosureContent,
    DisclosureToggle,
    DisclosureHeading,
    DisclosureTrigger,
  },
} as Meta;

const AccordionItem = (props) => (
  <RealDisclosure {...props}>
    <DisclosureToggle>Toggle</DisclosureToggle>
    <DisclosureContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </DisclosureContent>
  </RealDisclosure>
);

export const Default = (args) => (
  <Accordion>
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

export const AllowToggle = (args) => (
  <Accordion {...args} allowToggle>
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

export const DefaultExapnded = (args) => (
  <Accordion {...args} defaultExpanded={{ 1: true }}>
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
    <AccordionItem />
  </Accordion>
);
