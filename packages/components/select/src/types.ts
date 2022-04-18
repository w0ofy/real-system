import {
  SelectStatePrimitive,
  SelectStatePrimitiveProps,
} from '@real-system/select-primitive';
import type { StylishProps } from '@real-system/styling-library';
import type { RealSystemElementProps } from '@real-system/utils-library';

type SelectState = SelectStatePrimitive;
type SelectStateProps = SelectStatePrimitiveProps;
type InternalSelectProps = { state: SelectState };

type SelectFormStateProps = {
  error?: boolean;
};

/** Select component */
type SelectProps = SelectStateProps & {
  children: React.ReactNode;
} & StylishProps &
  RealSystemElementProps &
  SelectFormStateProps;

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
