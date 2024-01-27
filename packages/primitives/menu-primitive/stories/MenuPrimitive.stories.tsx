import * as React from 'react';
import type { Meta } from '@storybook/react';

import { Button } from '@real-system/button';
import {
  MenuButtonPrimitive,
  MenuItemPrimitive,
  MenuPrimitive,
  MenuProviderPrimitive,
  MenuSeparatorPrimitive,
} from '@real-system/menu-primitive';
export default {
  title: 'Primitives/Menu Primitive',
  component: MenuPrimitive,
  subcomponents: {
    MenuButtonPrimitive,
    MenuItemPrimitive,
  },
} as Meta;

const itemStyles = { padding: '8px', cursor: 'pointer', width: '100%' };

const Template = () => {
  return (
    <MenuProviderPrimitive>
      <MenuButtonPrimitive render={<Button />}>Actions</MenuButtonPrimitive>
      <MenuPrimitive
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          backgroundColor: 'white',
          border: '1px solid lightgray',
          minWidth: '225px',
          padding: '8px 0',
        }}>
        <MenuItemPrimitive style={itemStyles} onClick={() => alert('Edit')}>
          Edit
        </MenuItemPrimitive>
        <MenuItemPrimitive style={itemStyles} onClick={() => alert('Share')}>
          Share
        </MenuItemPrimitive>
        <MenuItemPrimitive style={{ ...itemStyles, color: 'gray' }} disabled>
          Delete
        </MenuItemPrimitive>
        <MenuSeparatorPrimitive style={{ width: 'calc(100% - 16px' }} />
        <MenuItemPrimitive style={itemStyles} onClick={() => alert('Report')}>
          Report
        </MenuItemPrimitive>
      </MenuPrimitive>
    </MenuProviderPrimitive>
  );
};

export const Default = Template.bind({});
