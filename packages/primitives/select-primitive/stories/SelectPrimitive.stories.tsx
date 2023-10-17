import * as React from 'react';
import type { Meta } from '@storybook/react';

import {
  SelectItemPrimitive,
  SelectLabelPrimitive,
  SelectPopoverPrimitive,
  SelectPrimitive,
  SelectProviderPrimitive,
} from '@real-system/select-primitive';

export default {
  title: 'Primitives/Select Primitive',
  component: SelectPrimitive,
  subcomponents: {
    SelectItemPrimitive,
    SelectLabelPrimitive,
    SelectPopoverPrimitive,
  },
} as Meta;

const Template = () => {
  return (
    <div className="wrapper">
      <SelectProviderPrimitive defaultValue="Apple">
        <SelectLabelPrimitive>Favorite fruit</SelectLabelPrimitive>
        <SelectPrimitive />
        <SelectPopoverPrimitive sameWidth gutter={4}>
          <SelectItemPrimitive value="Apple" />
          <SelectItemPrimitive value="Banana" />
          <SelectItemPrimitive value="Grape" disabled />
          <SelectItemPrimitive value="Orange" />
        </SelectPopoverPrimitive>
      </SelectProviderPrimitive>
    </div>
  );
};

export const Default = Template.bind({});
