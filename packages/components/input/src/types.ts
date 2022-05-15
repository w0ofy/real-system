import * as React from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';

import { InputBoxProps } from './InputBox';

export type InputProps = Partial<
  Pick<
    InputBoxProps,
    | 'disabled'
    | 'error'
    | 'readOnly'
    | 'type'
    | 'prefix'
    | 'suffix'
    | 'addonProps'
  >
> & {
  id?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  name?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
} & RealElementPrimitiveProps<'input'>;
