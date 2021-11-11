import type { SpaceProps } from '@real-system/styling';

import { InputBoxProps, InputBoxTypes } from './InputBox';

export type InputProps = Omit<InputBoxProps, 'children' | 'type'> & {
  id?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  name?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  type: InputBoxTypes;
  size?: never;
  style?: never;
  width?: never;
  height?: never;
  className?: never;
} & SpaceProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>;
