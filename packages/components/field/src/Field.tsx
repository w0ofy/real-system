import React, { useMemo } from 'react';

import { Flex } from '@real-system/flex';
import { HelpText, Label } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import type { FieldProps } from './types';

/**
 *
 * @todo possibly add FieldControl and FieldGroupControl for easy-to-use field context
 */

/**
 * @description A flex wrapper composed of `Label`, `HelpText` and whatever field **input** is passed as a child.
 * `Field` simplifies the work of composing field **inputs** together. `Field` should *not* be used with **controls** like
 * `RadioGroup` or `CheckboxGroup` — it is meant to be used with inputs only.
 */
const Field = ({
  builtIns = true,
  children,
  errorText,
  helpText,
  label,
  labelFor,
  required,
  ...restProps
}: FieldProps) => {
  const hasHelpText = useMemo(
    () => !!helpText || !!errorText,
    [helpText, errorText]
  );
  if (builtIns)
    return (
      <Flex
        vertical
        xAlignContent="left"
        data-testid={makeTestId('field')}
        gap={2}
        {...restProps}>
        {label && (
          <Label htmlFor={labelFor} required={required} whiteSpace="nowrap">
            {label}
          </Label>
        )}
        {children}
        {hasHelpText && <HelpText errorText={errorText}>{helpText}</HelpText>}
      </Flex>
    );
  return (
    <Flex vertical gap={2} {...restProps}>
      {children}
    </Flex>
  );
};

export type { FieldProps };
export { Field };
