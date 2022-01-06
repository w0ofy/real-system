/**
 * Renamed props to make prop api consistent with other component prop names
 */
import React from 'react';

import type { FlexProps } from '@real-system/flex';
import type {
  Aria_AriaCheckboxGroupItemProps,
  Aria_AriaCheckboxGroupProps,
  Aria_AriaCheckboxProps,
} from '@real-system/react-aria';

type RenamedReactAriaProps = {
  disabled?: Aria_AriaCheckboxProps['isDisabled'];
  readonly?: Aria_AriaCheckboxProps['isReadOnly'];
  indeterminate?: Aria_AriaCheckboxProps['isIndeterminate'];
  required?: Aria_AriaCheckboxProps['isRequired'];
  checked?: Aria_AriaCheckboxProps['isSelected'];
};

type CustomProps = {
  helpText?: string;
};

type PropsToRename =
  | 'isDisabled'
  | 'isReadonly'
  | 'isIndeterminate'
  | 'isRequired'
  | 'isSelected';

/** Checkbox */
type CheckboxProps = RenamedReactAriaProps &
  Omit<Aria_AriaCheckboxProps, PropsToRename> &
  CustomProps;

type ReactAriaCheckboxProps = Aria_AriaCheckboxProps;

type CustomCheckboxGroupProps = {
  errorText?: string;
  children: React.ReactNode;
  canSelectAll?: boolean;
};

/** Checkbox Group */
type CheckboxGroupProps = Pick<RenamedReactAriaProps, 'readonly' | 'disabled'> &
  Omit<Aria_AriaCheckboxGroupProps, PropsToRename> &
  CustomProps &
  CustomCheckboxGroupProps &
  FlexProps;

type ReactAriaCheckboxGroupProps = Aria_AriaCheckboxGroupProps;

/** Checkbox Group Item */
type CheckboxGroupItemProps = RenamedReactAriaProps &
  Omit<Aria_AriaCheckboxGroupItemProps, PropsToRename> &
  CustomProps;

type ReactAriaCheckboxGroupItemProps = Aria_AriaCheckboxGroupItemProps &
  Pick<Aria_AriaCheckboxProps, 'isSelected'>;

export type {
  // real system props
  CheckboxGroupItemProps,
  CheckboxGroupProps,
  CheckboxProps,
  CustomProps,
  // react aria props
  ReactAriaCheckboxGroupItemProps,
  ReactAriaCheckboxGroupProps,
  ReactAriaCheckboxProps,
};
