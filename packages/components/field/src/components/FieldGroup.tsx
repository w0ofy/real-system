import * as React from 'react';

import type { FlexProps } from '@real-system/flex';
import { Flex } from '@real-system/flex';
import { makeTestId } from '@real-system/utils-library';

type FieldGroupProps = FlexProps;

/**
 * @description A flex wrapper composed of `Label`, `HelperText` and whatever field **input** is passed as a child.
 * `Field` simplifies the work of composing field **inputs** together. `Field` should *not* be used with **controls** like
 * `RadioGroup` or `CheckboxGroup` — it is meant to be used with inputs only.
 */
const FieldGroup = React.forwardRef<HTMLDivElement, FieldGroupProps>(
  function FieldGroup({ children, inline, ...restProps }, ref) {
    const maybeInline = inline ? {} : { vertical: true };
    return (
      <Flex
        {...maybeInline}
        space={8}
        data-testid={makeTestId('field-group')}
        {...restProps}
        ref={ref}>
        {children}
      </Flex>
    );
  }
);

export type { FieldGroupProps };
export { FieldGroup };
