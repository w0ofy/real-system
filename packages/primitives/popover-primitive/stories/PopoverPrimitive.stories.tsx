import * as React from 'react';
import type { Meta } from '@storybook/react';

import { Button } from '@real-system/button';
import {
  PopoverArrowPrimitive,
  PopoverDescriptionPrimitive,
  PopoverDisclosurePrimitive,
  PopoverHeadingPrimitive,
  PopoverPrimitive,
  usePopoverStorePrimitive,
} from '@real-system/popover-primitive';
export default {
  title: 'Primitives/Popover Primitive',
  component: PopoverPrimitive,
  subcomponents: {
    PopoverArrowPrimitive,
    PopoverDescriptionPrimitive,
    PopoverDisclosurePrimitive,
    PopoverHeadingPrimitive,
  },
} as Meta;

const Template = () => {
  const popover = usePopoverStorePrimitive();
  return (
    <>
      <PopoverDisclosurePrimitive
        as={Button}
        variant="fill"
        colorScheme="blue"
        store={popover}>
        Accept invite
      </PopoverDisclosurePrimitive>
      <PopoverPrimitive
        store={popover}
        style={{
          background: 'white',
          zIndex: 1,
          border: '1px solid lightgray',
          padding: '14px',
        }}>
        <PopoverArrowPrimitive />
        <PopoverHeadingPrimitive>Team meeting</PopoverHeadingPrimitive>
        <PopoverDescriptionPrimitive>
          We are going to discuss what we have achieved on the project.
        </PopoverDescriptionPrimitive>
        <div>
          <p>12 Jan 2022 18:00 to 19:00</p>
          <p>Alert 10 minutes before start</p>
        </div>
        <Button
          variant="fill"
          colorScheme="blue"
          onClick={() => popover.hide()}>
          Accept
        </Button>
      </PopoverPrimitive>
    </>
  );
};

export const Default = Template.bind({});
