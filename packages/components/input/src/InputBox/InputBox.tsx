import React from 'react';

import { Box, BoxStyleProps } from '@real-system/box-primitive';
import type { RealSystemElementProps } from '@real-system/types-library';
import { makeTestId, merge } from '@real-system/utils-library';

import { Addon, AddonProps } from './Addon';

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
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  addonProps?: Omit<AddonProps, 'children'>;
} & RealSystemElementProps;

type InputBoxStates = 'readonly' | 'hidden' | 'disabled' | 'default' | 'error';

const baseStyles: BoxStyleProps = {
  display: 'flex',
  width: '100%',
  border: '1px solid',
  borderRadius: 2,
  transition: 'box-shadow 150ms ease-in, border-color 150ms ease-in',
  bg: 'color-background',
  cursor: 'text',
  outline: 'none',
  boxShadow: 'none',
};

const styles: { [key in InputBoxStates]: BoxStyleProps } = {
  default: merge(baseStyles, {
    color: 'color-text',
    borderColor: 'color-border-neutral-weak-5',
    _hover: {
      borderColor: 'color-border-neutral-weak-2',
    },
    _focusWithin: {
      borderColor: 'color-border-neutral',
      boxShadow: 'shadow-focus',
    },
    _active: {
      borderColor: 'color-border-neutral',
      boxShadow: 'none',
    },
  }),
  disabled: merge(baseStyles, {
    color: 'color-text-disabled-strong-3',
    bg: 'color-background-disabled-weak-5',
    borderColor: 'color-border-disabled',
    cursor: 'not-allowed',
  }),
  readonly: merge(baseStyles, {
    color: 'color-text-disabled-strong-7',
    bg: 'color-background-disabled-weak-3',
    borderColor: 'color-border-disabled-strong-2',
    _hover: { borderColor: 'color-border-disabled-strong-2' },
    _focusWithin: {
      boxShadow: 'shadow-focus',
      borderColor: 'color-border-disabled-strong-2',
    },
    _active: { borderColor: 'color-border-disabled-strong-2' },
  }),
  error: merge(baseStyles, {
    borderColor: 'color-border-danger',
    _hover: { borderColor: 'color-border-danger-strong-3' },
    _focusWithin: {
      boxShadow: 'shadow-focus',
      borderColor: 'color-border-danger-strong-3',
    },
    _active: { borderColor: 'color-border-danger-strong-3' },
  }),
  hidden: merge(baseStyles, {
    bg: 'none',
    border: 0,
    _hover: { border: 0 },
    _focusWithin: {
      boxShadow: 'none',
      border: 0,
    },
    _active: { border: 0 },
  }),
};

const InputBox = React.forwardRef<HTMLDivElement, InputBoxProps>(
  (
    {
      disabled,
      error = false,
      readOnly,
      children,
      type,
      suffix,
      prefix,
      addonProps,
      ...restProps
    },
    ref
  ) => {
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
      <Box
        ref={ref}
        {...styles[state]}
        height="100%"
        data-testid={makeTestId('input-box')}
        {...restProps}>
        {prefix && (
          <Addon disabled={disabled} {...addonProps}>
            {prefix}
          </Addon>
        )}
        {children}
        {suffix && (
          <Addon disabled={disabled} {...addonProps} isSuffix>
            {suffix}
          </Addon>
        )}
      </Box>
    );
  }
);

InputBox.displayName = 'InputBox';

export { InputBox };
