import * as React from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import type { FieldControl } from '@real-system/field';

import { InputBoxProps } from './InputBox';

export type InputProps = Partial<
  Pick<InputBoxProps, 'type' | 'prefix' | 'suffix' | 'addonProps'>
> & {
  id?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  name?: string;
  placeholder?: string;
  value?: string;
} & RealElementPrimitiveProps<'input'> &
  FieldControl;
