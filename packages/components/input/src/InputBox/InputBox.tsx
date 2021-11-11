import * as React from 'react';

import { Box, BoxStyleProps } from '@real-system/box';
import { merge } from '@real-system/utils';

export type InputBoxTypes =
  | 'text'
  | 'email'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'date'
  | 'time';

export type InputBoxProps = {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  error?: boolean;
  readOnly?: boolean;
  type?: InputBoxTypes;
  insertBefore?: React.ReactNode;
  insertAfter?: React.ReactNode;
};

type InputBoxStates = 'readonly' | 'hidden' | 'disabled' | 'default' | 'error';

const baseStyles: BoxStyleProps = {
  display: 'flex',
  width: '100%',
  border: '1px solid',
  borderColor: 'color-border-neutral-weak',
  borderRadius: 2,
  transition: 'box-shadow 150ms ease-in',
  bg: 'color-background',
  cursor: 'text',
  outline: 'none',
  _hover: {
    borderColor: 'color-border-neutral-stronger',
  },
  _active: {
    borderColor: 'color-border-neutral-stronger',
    boxShadow: 'none',
  },
  _focusWithin: {
    borderColor: 'color-border-neutral-stronger',
    boxShadow: 'shadow-border-brand-weak',
  },
};

const styles: { [key in InputBoxStates]: BoxStyleProps } = {
  default: baseStyles,
  disabled: merge(baseStyles, {
    bg: 'color-background-disabled',
    borderColor: 'color-border-disabled-strong',
    cursor: 'not-allowed',
    _hover: { borderColor: 'color-border-disabled-strong' },
    _active: { borderColor: 'color-border-disabled-strong' },
    _focusWithin: {
      boxShadow: 'none',
      borderColor: 'color-border-disabled-strong',
    },
  }),
  readonly: merge(baseStyles, {
    bg: 'color-background-disabled',
    borderColor: 'color-border-disabled-strong',
    _hover: { borderColor: 'color-border-disabled-strong' },
    _active: { borderColor: 'color-border-disabled-strong' },
    _focusWithin: {
      borderColor: 'color-border-disabled-strong',
    },
  }),
  error: merge(baseStyles, {
    borderColor: 'color-border-danger',
    _hover: { borderColor: 'color-border-danger-strong' },
    _active: { borderColor: 'color-border-danger-strong' },
    _focusWithin: {
      borderColor: 'color-border-danger-strong',
    },
  }),
  hidden: merge(baseStyles, {
    bg: 'none',
    border: 0,
    _hover: { border: 0 },
    _active: { border: 0 },
    _focusWithin: {
      boxShadow: 'none',
      border: 0,
    },
  }),
};

const InputBox = React.forwardRef<HTMLDivElement, InputBoxProps>(
  ({ disabled, error = false, readOnly, children, type }, ref) => {
    const isHidden = type === 'hidden';
    const isDisabled = disabled && !isHidden;
    const isDanger = error && !isHidden;
    const isReadOnly = readOnly && !isHidden;
    let state: InputBoxStates = 'default';

    if (isDisabled) {
      state = 'disabled';
    } else if (isDanger) {
      state = 'error';
    } else if (isReadOnly) {
      state = 'readonly';
    } else if (isHidden) {
      state = 'hidden';
    }

    return (
      <Box ref={ref} {...styles[state]}>
        {children}
      </Box>
    );
  }
);

InputBox.displayName = 'InputBox';

export { InputBox };
