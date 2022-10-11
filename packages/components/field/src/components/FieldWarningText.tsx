import React from 'react';

import type { HelpTextProps, InvalidConfig } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { makeTestId } from '@real-system/utils-library';

import { useFieldControl } from '../FieldControl';

type FieldWarningTextProps = Omit<HelpTextProps, 'hideIcon'> & {
  invalid?: InvalidConfig;
};

/**
 * @name Field.WarningText
 * @description A modified `Text.Help` for `Field` components.
 */
const FieldWarningText = React.forwardRef<
  HTMLSpanElement,
  FieldWarningTextProps
>(function FieldWarnText({ children, ...restProps }, ref) {
  const { warningMessage } = useFieldControl();

  return (
    <Text.Help
      testId={makeTestId('field-error-text')}
      variant="warning"
      {...restProps}
      ref={ref}>
      {warningMessage || children}
    </Text.Help>
  );
});

export type { FieldWarningTextProps };
export { FieldWarningText };
