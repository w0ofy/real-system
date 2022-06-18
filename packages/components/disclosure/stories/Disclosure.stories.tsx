import * as React from 'react';
import { Meta } from '@storybook/react';

import {
  Disclosure,
  DisclosureContent,
  DisclosureToggle,
} from '@real-system/disclosure';
import { real } from '@real-system/elements-primitive';

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
} as Meta;

export const Default = (args) => (
  <real.div width="450px">
    <Disclosure {...args}>
      <DisclosureToggle>Toggle</DisclosureToggle>
      <DisclosureContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </DisclosureContent>
    </Disclosure>
  </real.div>
);

export const Contained = (args) => (
  <real.div width="450px">
    <Disclosure {...args} contained>
      <DisclosureToggle>Toggle</DisclosureToggle>
      <DisclosureContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </DisclosureContent>
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
            <DisclosureToggle>Toggle</DisclosureToggle>
            <DisclosureContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </DisclosureContent>
          </>
        );
      }}
    </Disclosure>
  </real.div>
);
