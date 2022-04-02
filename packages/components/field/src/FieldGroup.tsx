import * as React from 'react';

import { Flex } from '@real-system/flex';
import { makeTestId } from '@real-system/utils-library';

import type { FieldGroupProps, FieldProps } from './types';

/**
 * @description A flex wrapper composed of `Label`, `HelpText` and whatever field **input** is passed as a child.
 * `Field` simplifies the work of composing field **inputs** together. `Field` should *not* be used with **controls** like
 * `RadioGroup` or `CheckboxGroup` — it is meant to be used with inputs only.
 */
const FieldGroup = ({ children, inline, ...restProps }: FieldGroupProps) => {
  const dynamicProps = inline ? {} : { vertical: true };
  return (
    <Flex
      {...dynamicProps}
      space={8}
      data-testid={makeTestId('field-group')}
      {...restProps}>
      {children}
    </Flex>
  );
};

export type { FieldProps };
export { FieldGroup };
