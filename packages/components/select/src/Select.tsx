import React, { forwardRef } from 'react';

import { real } from '@real-system/elements-primitive';
import type { SelectPrimitiveOptions } from '@real-system/select-primitive';
import { useSelectStatePrimitive } from '@real-system/select-primitive';
import {
  SelectLabelPrimitive,
  SelectPrimitive,
} from '@real-system/select-primitive';
import type { StylishProps } from '@real-system/styled-library';
import styled, { spreadStyleProps } from '@real-system/styled-library';
import { Text } from '@real-system/typography';
import { merge } from '@real-system/utils-library';

import { SelectContextProvider } from './SelectContext';
import { SelectGroup } from './SelectGroup';
import { SelectItem } from './SelectItem';
import { SelectPopover } from './SelectPopover';
import { SelectSeparator } from './SelectSeparator';
import type { SelectProps } from './types';

const StyledSelectInput = styled(SelectPrimitive)<SelectPrimitiveOptions>();

const resetStyles = {
  bg: 'none',
  border: 'none',
};

const baseStyles: StylishProps = {
  ...resetStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: 'control',
  paddingX: 6,
  margin: 0,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 4,
  outline: 'none',
  boxShadow: 'none',
  bgColor: 'white',
  color: 'gray-500',
  cursor: 'text',
  fontScale: 'input',
  fontWeight: 'input',
  transition: 'box-shadow 150ms ease-in, border-color 150ms ease-in',
  boxSizing: 'border-box',
  _hover: {},
  _focusWithin: {},
  _active: { boxShadow: 'none' },
};

const selectStyles: Record<'default' | 'danger', StylishProps> = {
  default: merge(baseStyles, {
    borderColor: 'gray-200',
    _hover: {
      borderColor: 'gray-300',
    },
    _focusWithin: {
      borderColor: 'gray-300',
      boxShadow: 'focus-outline',
    },
    _expanded: {
      borderColor: 'gray-300',
    },
    _disabled: {
      color: 'gray-300',
      bgColor: 'gray-50',
      borderColor: 'gray-200',
      cursor: 'default',
    },
  }),
  danger: merge(baseStyles, {
    borderColor: 'red-500',
    _hover: { borderColor: 'red-600' },
    _focusWithin: {
      boxShadow: 'focus-outline',
      borderColor: 'red-600',
    },
    _active: { borderColor: 'red-600' },
  }),
};

export interface SelectComponent
  extends React.ForwardRefExoticComponent<SelectProps> {
  Item: typeof SelectItem;
  Separator: typeof SelectSeparator;
  Group: typeof SelectGroup;
}

// @ts-expect-error Select component properties are defined on the fn object after this is defined
const Select: SelectComponent = forwardRef<HTMLButtonElement, SelectProps>(
  function Select(
    {
      children,
      placement = 'bottom',
      flip = true,
      hasError = false,
      label,
      disabled,
      onChange,
      required,
      ...restProps
    },
    ref
  ) {
    const state = useSelectStatePrimitive({
      placement,
      gutter: 2,
      sameWidth: true,
      flip,
      setValue: onChange,
      ...restProps,
    });
    const styles = hasError ? selectStyles['danger'] : selectStyles['default'];

    return (
      <real.div
        display="flex"
        flexDirection="column"
        width="100%"
        gap={2}
        {...spreadStyleProps(restProps)}>
        <SelectContextProvider state={{ ...state, hasError }}>
          <>
            <SelectLabelPrimitive
              as={Text.Label}
              state={state}
              disabled={disabled}
              required={required}>
              {label}
            </SelectLabelPrimitive>
            <StyledSelectInput
              {...styles}
              state={state}
              disabled={disabled}
              ref={ref}
            />
            <SelectPopover>{children as React.ReactNode}</SelectPopover>
          </>
        </SelectContextProvider>
      </real.div>
    );
  }
);

Select.Item = SelectItem;
Select.Separator = SelectSeparator;
Select.Group = SelectGroup;

export type { SelectProps };
export { Select };
