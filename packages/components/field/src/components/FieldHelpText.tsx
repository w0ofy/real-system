import React from 'react';

import type { HelpTextProps } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { useFieldControl } from '../FieldControl';

type FieldHelpTextProps = Omit<HelpTextProps, 'invalid'>;

/**
 * @name Field.HelpText
 * @description A modified `Text.Help` for `Field` components.
 */
const FieldHelpText = React.forwardRef<HTMLSpanElement, FieldHelpTextProps>(
  function FieldHelpText({ children, ...restProps }, ref) {
    const { helpText } = useFieldControl();
    return (
      <Text.Help
        testId={makeTestId('field-helper-text')}
        {...restProps}
        ref={ref}>
        {helpText || children}
      </Text.Help>
    );
  }
);

export type { FieldHelpTextProps };
export { FieldHelpText };
