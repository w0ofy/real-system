import * as React from 'react';

import { RealSystemElementProps } from '@real-system/styling-library';

type TextareaProps = RealSystemElementProps<'textarea'> & {
  disabled?: boolean;
  error?: boolean;
  height?: never;
  id?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: never;
  style?: never;
  width?: never;
};

export type { TextareaProps };
