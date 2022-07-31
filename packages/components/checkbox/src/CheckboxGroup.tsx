import * as React from 'react';

import { CheckboxGroupPrimitive } from '@real-system/checkbox-primitive';
import { real } from '@real-system/elements-primitive';
import type { RealSystemChildrenProp } from '@real-system/styled-library';

import { CheckboxGroupProvider } from './Checkbox.context';
import type { SetCheckboxValue } from './Checkbox.model';
import type { TreeStateOptions } from './useTreeState';
import { useTreeState } from './useTreeState';

type CheckboxGroupProps = RealSystemChildrenProp & {
  onChange?: SetCheckboxValue;
} & Omit<TreeStateOptions, 'setValue'>;

const CheckboxGroup = ({
  value,
  children,
  onChange,
  defaultValue = [],
  items,
  required = false,
}: CheckboxGroupProps) => {
  const state = useTreeState({
    items,
    setValue: onChange,
    defaultValue,
    value,
  });
  return (
    <CheckboxGroupProvider value={{ ...state, required }}>
      <CheckboxGroupPrimitive
        as={real.div}
        display="flex"
        flexDirection="column"
        gap={4}
        sx={{ '& > span[data-real-system="checkbox"]': { marginLeft: 4 } }}>
        {children}
      </CheckboxGroupPrimitive>
    </CheckboxGroupProvider>
  );
};

export { CheckboxGroup };
