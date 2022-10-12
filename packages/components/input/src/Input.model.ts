import * as React from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import type { ValidationProps } from '@real-system/utils-library';

import { InputBoxProps } from './InputBox';

export type InputProps = Partial<
  Pick<InputBoxProps, 'type' | 'prefix' | 'suffix' | 'addonProps'>
> & {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  name?: string;
  placeholder?: string;
  value?: string;
} & RealElementPrimitiveProps<'input'> &
  Pick<ValidationProps, 'hasError' | 'required'>;
