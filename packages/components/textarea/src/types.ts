import * as React from 'react';

import { RealSystemElementProps } from '@real-system/utils-library';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
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
} & RealSystemElementProps;

export type { TextareaProps };
