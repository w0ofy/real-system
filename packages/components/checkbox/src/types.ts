/**
 * Renamed props to make prop api consistent with other component prop names
 */
import React from 'react';

import type { FlexProps } from '@real-system/flex';
import type {
  AriaCheckboxGroupItemProps,
  SpectrumCheckboxGroupProps,
  SpectrumCheckboxProps,
} from '@real-system/react-aria-library';

type RenamedCheckboxProps = {
  disabled?: SpectrumCheckboxProps['isDisabled'];
  readonly?: SpectrumCheckboxProps['isReadOnly'];
  indeterminate?: SpectrumCheckboxProps['isIndeterminate'];
  required?: SpectrumCheckboxProps['isRequired'];
  checked?: SpectrumCheckboxProps['isSelected'];
  defaultChecked?: SpectrumCheckboxProps['defaultSelected'];
};

type RenamedCheckboxGroupProps = {
  readonly?: SpectrumCheckboxGroupProps['isReadOnly'];
  disabled?: SpectrumCheckboxGroupProps['isDisabled'];
};

/** should match keys of values in RenamedCheckboxProps */
type PropsToRename =
  | 'isDisabled'
  | 'isReadonly'
  | 'isIndeterminate'
  | 'isRequired'
  | 'isSelected'
  | 'defaultSelected';

type CustomProps = {
  helpText?: string;
  errorText?: string;
};

type CheckboxProps = RenamedCheckboxProps &
  Omit<SpectrumCheckboxProps, PropsToRename> &
  CustomProps;

type ReactAriaCheckboxProps = SpectrumCheckboxProps;

/** Checkbox Group */
type CustomCheckboxGroupProps = {
  children: React.ReactNode;
  canSelectAll?: boolean;
  required?: boolean;
} & CustomProps;

type CheckboxGroupProps = RenamedCheckboxGroupProps &
  Omit<SpectrumCheckboxGroupProps, PropsToRename> &
  CustomCheckboxGroupProps &
  FlexProps;

type ReactAriaCheckboxGroupProps = SpectrumCheckboxGroupProps;

/** Checkbox Group Item */
type CheckboxGroupItemProps = RenamedCheckboxProps &
  Omit<AriaCheckboxGroupItemProps, PropsToRename> &
  CustomProps;

type ReactAriaCheckboxGroupItemProps = AriaCheckboxGroupItemProps &
  // we've altered the react-aria CheckboxGroupItem api to also accept 'checked' which needs to get renamed to `isSelected`
  Pick<SpectrumCheckboxProps, 'isSelected' | 'defaultSelected'>;

export type {
  // real system props
  CheckboxGroupItemProps,
  CheckboxGroupProps,
  CheckboxProps,
  CustomCheckboxGroupProps,
  CustomProps,
  // react aria props
  ReactAriaCheckboxGroupItemProps,
  ReactAriaCheckboxGroupProps,
  ReactAriaCheckboxProps,
};
