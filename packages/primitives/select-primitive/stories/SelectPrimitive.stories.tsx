import * as React from 'react';
import { Meta } from '@storybook/react';

import {
  SelectItemPrimitive,
  SelectLabelPrimitive,
  SelectPopoverPrimitive,
  SelectPrimitive,
  useSelectStatePrimitive,
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
  const select = useSelectStatePrimitive({
    defaultValue: 'Apple',
    sameWidth: true,
    gutter: 4,
  });
  return (
    <div className="wrapper">
      <SelectLabelPrimitive state={select}>Favorite fruit</SelectLabelPrimitive>
      <SelectPrimitive state={select} />
      <SelectPopoverPrimitive state={select}>
        <SelectItemPrimitive value="Apple" />
        <SelectItemPrimitive value="Banana" />
        <SelectItemPrimitive value="Grape" disabled />
        <SelectItemPrimitive value="Orange" />
      </SelectPopoverPrimitive>
    </div>
  );
};

export const Default = Template.bind({});
