import * as React from 'react';

import type { BoxStyleProps } from '@real-system/box-primitive';

import { InputBoxProps, InputBoxTypes } from './InputBox';

export type InputProps = Omit<InputBoxProps, 'children' | 'type'> & {
  id: string;
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
} & BoxStyleProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>;
