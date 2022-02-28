import React, { forwardRef } from 'react';

import { Box, BoxStyleProps } from '@real-system/box-primitive';
import { TextPrimitive } from '@real-system/text-primitive';
import { useComponentTokens } from '@real-system/theme-library';

import { RequiredDot } from './RequiredDot';
import { CommonTextProps } from './types';

export type LabelProps = {
  children?: React.ReactNode;
  htmlFor?: string;
  as?: 'label' | 'legend';
  disabled?: boolean;
  required?: boolean;
  containerProps?: BoxStyleProps;
  textProps?: BoxStyleProps;
} & CommonTextProps;

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  {
    children,
    as = 'label',
    disabled,
    required,
    textProps,
    containerProps,
    cursor = 'pointer',
    ...restProps
  },
  ref
) {
  const { text, requiredDot, innerSpan } =
    useComponentTokens<'label'>('label').parts;
  return (
    <TextPrimitive
      as={as}
      {...text.baseStyles({ disabled, cursor })}
      {...restProps}
      ref={ref}>
      <Box as="span" {...innerSpan.baseStyles} {...containerProps}>
        {required ? (
          <RequiredDot
            disabled={disabled}
            {...requiredDot.baseStyles({ disabled, cursor })}
          />
        ) : null}
        <Box as="span" {...textProps}>
          {children}
        </Box>
      </Box>
    </TextPrimitive>
  );
});

export { Label };
