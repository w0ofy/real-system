import React, { forwardRef } from 'react';

import { useFieldControl } from '@real-system/field';

import { InputBox, InputBoxTypes } from './InputBox';
import { InputElement } from './InputElement';
import { InputProps } from './types';

type InputTypeProps = {
  type: InputBoxTypes;
  inputmode?: string;
  pattern?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { type = 'text', suffix, prefix, placeholder, id, value, name, ...restProps },
  ref
) {
  const { readOnly, disabled, invalid, required } = useFieldControl(restProps);

  const inputTypeProps: InputTypeProps = { type };

  if (type === 'number') {
    /** provides a more stable expereince across browsers */
    inputTypeProps.type = 'text';
    inputTypeProps.inputmode = 'numeric';
    inputTypeProps.pattern = '[0-9]*';
  }

  return (
    <InputBox
      type={type}
      disabled={disabled}
      invalid={invalid.status}
      readOnly={readOnly}
      suffix={suffix}
      prefix={prefix}
      {...restProps}>
      <InputElement
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        ref={ref}
        {...inputTypeProps}
        {...restProps}
      />
    </InputBox>
  );
});

export { Input };
export type { InputProps };
