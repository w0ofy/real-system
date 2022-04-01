/**
 * Renamed props to make prop api consistent with other component prop names
 */
import * as React from 'react';
import type { CheckboxGroupState as AriaCheckboxGroupState } from '@react-stately/checkbox';
import type {
  AriaCheckboxGroupItemProps as OriginalAriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps as OriginalAriaCheckboxGroupProps,
  AriaCheckboxProps as OriginalAriaCheckboxProps,
} from '@react-types/checkbox';
import type { Orientation } from '@react-types/shared';

type RenamedCheckboxProps = {
  disabled?: OriginalAriaCheckboxProps['isDisabled'];
  readonly?: OriginalAriaCheckboxProps['isReadOnly'];
  indeterminate?: OriginalAriaCheckboxProps['isIndeterminate'];
  required?: OriginalAriaCheckboxProps['isRequired'];
  checked?: OriginalAriaCheckboxProps['isSelected'];
  defaultChecked?: OriginalAriaCheckboxProps['defaultSelected'];
};
type RenamedCheckboxGroupProps = {
  readonly?: OriginalAriaCheckboxGroupProps['isReadOnly'];
  disabled?: OriginalAriaCheckboxGroupProps['isDisabled'];
};
/** should match keys of values in RenamedCheckboxProps */
type PropsToRename =
  | 'isDisabled'
  | 'isReadonly'
  | 'isIndeterminate'
  | 'isRequired'
  | 'isSelected'
  | 'defaultSelected';

/** Checkbox */
type AriaCheckboxProps = RenamedCheckboxProps &
  Omit<OriginalAriaCheckboxProps, PropsToRename>;

type RestoredAriaCheckboxProps = OriginalAriaCheckboxProps;

/** Checkbox Group */
type CustomCheckboxGroupProps = {
  children: React.ReactNode;
  canSelectAll?: boolean;
  required?: boolean;
  orientation?: Orientation;
};

type AriaCheckboxGroupProps = RenamedCheckboxGroupProps &
  Omit<OriginalAriaCheckboxGroupProps, PropsToRename> &
  CustomCheckboxGroupProps;

type RestoredAriaCheckboxGroupProps = OriginalAriaCheckboxGroupProps;

/** Checkbox Group Item */
type AriaCheckboxGroupItemProps = RenamedCheckboxProps &
  Omit<OriginalAriaCheckboxGroupItemProps, PropsToRename>;

type RestoredAriaCheckboxGroupItemProps = AriaCheckboxGroupItemProps &
  // we've altered the react-aria CheckboxGroupItem api to also accept 'checked' which needs to get renamed to `isSelected`
  Pick<
    OriginalAriaCheckboxProps,
    | 'isSelected'
    | 'defaultSelected'
    | 'isDisabled'
    | 'isIndeterminate'
    | 'isRequired'
  >;

export type {
  // real system props
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  AriaCheckboxGroupState,
  AriaCheckboxProps,
  CustomCheckboxGroupProps,
  // react aria props
  RestoredAriaCheckboxGroupItemProps,
  RestoredAriaCheckboxGroupProps,
  RestoredAriaCheckboxProps,
};
