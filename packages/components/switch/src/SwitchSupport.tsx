import React, { forwardRef } from 'react';

import { real } from '@real-system/elements-primitive';
import { Text } from '@real-system/typography';
import type { ValidationProps } from '@real-system/utils-library';
import { makeTestId } from '@real-system/utils-library';

import { knobBoxModel } from './SwitchKnob';

type SwitchSupportProps = {
  labelId: string;
  helpTextId: string;
  switchId: string;
  onClick?: any;
  children?: React.ReactNode;
} & Omit<
  ValidationProps,
  'warningMessage' | 'readonly' | 'hasError' | 'errorMessage'
>;

const SwitchSupport = forwardRef<HTMLSpanElement, SwitchSupportProps>(
  function SwitchSupport(
    {
      children: label,
      disabled = false,
      helpText,
      helpTextId,
      labelId,
      switchId,
      required,
      onClick,
    },
    ref
  ) {
    if (!label) return null;
    return (
      <real.span
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        data-testid={makeTestId('switch-support')}
        ref={ref}>
        <real.span {...knobBoxModel}>
          <Text.Label
            required={required}
            disabled={disabled}
            onClick={onClick}
            data-testid={makeTestId('switch-label')}
            htmlFor={switchId}
            data-switch-support
            id={labelId}>
            {label}
          </Text.Label>
        </real.span>
        {helpText && (
          <Text.Help
            helpTextId={helpTextId}
            mt={1}
            data-testid={makeTestId('switch-help-text')}>
            {helpText}
          </Text.Help>
        )}
      </real.span>
    );
  }
);

export type { SwitchSupportProps };
export { SwitchSupport };
