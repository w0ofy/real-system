import {
  AriakitSelectState,
  AriakitSelectStateProps,
} from '@real-system/ariakit-library';
import type { StylishProps } from '@real-system/styling-library';
import { RealSystemElementProps } from '@real-system/utils-library';

type SelectState = AriakitSelectState;
type SelectStateProps = AriakitSelectStateProps;
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
