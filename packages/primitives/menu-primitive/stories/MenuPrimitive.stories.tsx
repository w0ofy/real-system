import React from 'react';
import { Meta } from '@storybook/react';

import {
  MenuButtonPrimitive,
  MenuItemPrimitive,
  MenuLinkPrimitive,
  MenuListPrimitive,
  MenuPrimitive,
} from '@real-system/menu-primitive';

export default {
  title: 'Primitives/Menu Primitive',
  component: MenuPrimitive,
} as Meta;

const Template = (args) => (
  <MenuPrimitive>
    <MenuButtonPrimitive>Actions</MenuButtonPrimitive>
    <MenuListPrimitive>
      <MenuItemPrimitive onSelect={() => window.alert('Menu item clicked')}>
        Download
      </MenuItemPrimitive>
      <MenuLinkPrimitive href="https://reactjs.org">
        Official react site
      </MenuLinkPrimitive>
    </MenuListPrimitive>
  </MenuPrimitive>
);

export const Default = Template.bind({});
