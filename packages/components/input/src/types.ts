import React from 'react';

import type { MarginProps } from '@real-system/styling-library';

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
} & MarginProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>;
