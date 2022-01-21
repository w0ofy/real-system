import React from 'react';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
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

export type { TextAreaProps };
