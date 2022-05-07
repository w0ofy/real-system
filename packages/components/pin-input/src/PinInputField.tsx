import React, { forwardRef } from 'react';

import { InputBox } from '@real-system/input';
import type { RealSystemComponentProps } from '@real-system/styling-library';
import styled from '@real-system/styling-library';

import { usePinInputField } from './usePinInput';

const StyledInput = styled('input')({
  appearance: 'none',
  display: 'block',
  height: 16,
  width: 16,
  padding: 0,
  margin: 0,
  fontFamily: 'inherit',
  fontSize: 1,
  fontWeight: 3,
  lineHeight: 1,
  textAlign: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 4,
  boxShadow: 'none',
  color: 'inherit',
  outline: 'none',
  resize: 'none',
  _placeholder: {
    color: 'gray-200',
    transition: '150ms all ease-in',
  },
  _hover_placeholder: {
    color: 'gray-300',
  },
  _focus_placeholder: {
    color: 'gray-300',
  },
  _focus: { outline: 'none' },
  _disabled: { cursor: 'default' },
  transition: '0.25s all ease-out',
});

type PinInputFieldProps = RealSystemComponentProps<'input'>;

const PinInputField = forwardRef<HTMLInputElement, PinInputFieldProps>(
  function PinInputField(props, ref) {
    const inputProps = usePinInputField(props, ref);
    return (
      <InputBox width="auto" error={inputProps['aria-invalid']}>
        <StyledInput {...inputProps} />
      </InputBox>
    );
  }
);

export { PinInputField };
