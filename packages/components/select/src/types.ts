import {
  SelectStatePrimitive,
  SelectStatePrimitiveProps,
} from '@real-system/select-primitive';
import type {
  RealSystemChildrenProp,
  StylishProps,
} from '@real-system/styled-library';
import { ValidationProps } from '@real-system/utils-library';

type SelectState = SelectStatePrimitive;
type SelectStateProps = SelectStatePrimitiveProps;
type InternalSelectProps = { state: SelectState };

/** Select Container component */
type SelectProps = {
  onChange?: SelectStateProps['setValue'];
  label?: React.ReactNode;
} & Partial<
  
  Pick  <
    SelectStateProps,
      | 'defaultValue'
      | 'defaultOpen'
      | 'flip'
      | 'setValue'
      | 'value'
      | 'open'
      | 'sameWidth'
      | 'placement'
    >

> &
  StylishProps &
  RealSystemChildrenProp &
  Pick<ValidationProps, 'hasError' | 'disabled' | 'required'>;

type OmitSelectPrivateProps<T> = Omit<T, 'state' | 'as'>;
type CommonSelectProps<T> = Omit<T, 'state' | 'as'> &
  Omit<StylishProps, keyof T | 'as'>;

export type {
  CommonSelectProps,
  InternalSelectProps,
  OmitSelectPrivateProps,
  SelectProps,
  SelectState,
  SelectStateProps,
};
