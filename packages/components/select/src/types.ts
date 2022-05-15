import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import {
  SelectStatePrimitive,
  SelectStatePrimitiveProps,
} from '@real-system/select-primitive';
import type { StylishProps } from '@real-system/styling-library';

type SelectState = SelectStatePrimitive;
type SelectStateProps = SelectStatePrimitiveProps;
type InternalSelectProps = { state: SelectState };

type SelectFormStateProps = {
  error?: boolean;
};

/** Select Container component */
type SelectContainerProps = SelectStateProps &
  RealElementPrimitiveProps<'div'> &
  SelectFormStateProps;

type OmitSelectPrivateProps<T> = Omit<T, 'state' | 'as'>;
type CommonSelectProps<T> = Omit<T, 'state' | 'as'> &
  Omit<StylishProps, keyof T | 'as'>;

export type {
  CommonSelectProps,
  InternalSelectProps,
  OmitSelectPrivateProps,
  SelectContainerProps,
  SelectState,
  SelectStateProps,
};
