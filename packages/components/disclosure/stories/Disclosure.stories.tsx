import * as React from 'react';
import { Meta } from '@storybook/react';

import { Disclosure } from '@real-system/disclosure';
import { real } from '@real-system/elements-primitive';

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
  subcomponents: {
    Disclosure,
    'Disclosure.Content': Disclosure.Content,
    'Disclosure.Toggle': Disclosure.Toggle,
    'Disclosure.Primitives.Heading': Disclosure.Primitives.Heading,
    'Disclosure.Primitives.Trigger': Disclosure.Primitives.Trigger,
  },
} as Meta;

export const Default = (args) => (
  <real.div width="450px">
    <Disclosure {...args}>
      <Disclosure.Toggle>Toggle</Disclosure.Toggle>
      <Disclosure.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Disclosure.Content>
    </Disclosure>
  </real.div>
);

export const Contained = (args) => (
  <real.div width="450px">
    <Disclosure {...args} contained>
      <Disclosure.Toggle>Toggle</Disclosure.Toggle>
      <Disclosure.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Disclosure.Content>
    </Disclosure>
  </real.div>
);

export const RenderProp = (args) => (
  <real.div width="450px">
    <Disclosure {...args}>
      {(props) => {
        // eslint-disable-next-line no-console
        console.log(props);
        return (
          <>
            <Disclosure.Toggle>Toggle</Disclosure.Toggle>
            <Disclosure.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Disclosure.Content>
          </>
        );
      }}
    </Disclosure>
  </real.div>
);
