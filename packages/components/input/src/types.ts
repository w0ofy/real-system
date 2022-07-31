import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';

import { InputBoxProps } from './InputBox';

export type InputProps = Partial<
  Pick<
    InputBoxProps,
    | 'disabled'
    | 'invalid'
    | 'readOnly'
    | 'type'
    | 'prefix'
    | 'suffix'
    | 'addonProps'
  >
> & {
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
} & RealElementPrimitiveProps<'input'>;
