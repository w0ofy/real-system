import * as React from 'react';

import { InputBox } from '@real-system/input';
import { preventSpreadingStyleProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

import { TextareaElement } from './TextareaElement';
import type { TextareaProps } from './types';

const addonProps = {
  height: 'unset',
  padding: 4,
  paddingTop: 5,
  alignItems: 'flex-start',
  'data-testid': makeTestId('text-area-input-box-addon'),
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { children, disabled, hasError, prefix, suffix, readonly, ...props },
    ref
  ) {
    return (
      <InputBox
        disabled={disabled}
        hasError={hasError}
        suffix={suffix}
        prefix={prefix}
        readonly={readonly}
        addonProps={addonProps}
        data-testid={makeTestId('text-area-input-box')}
        height="100%">
        <TextareaElement
          data-testid={makeTestId('text-area')}
          // size, height and width should never get passed down
          {...preventSpreadingStyleProps(props)}
          aria-invalid={hasError}
          aria-readonly={readonly}
          disabled={disabled}
          readonly={readonly}
          ref={ref}
          rows={3}
          spellCheck>
          {children}
        </TextareaElement>
      </InputBox>
    );
  }
);

export { Textarea };
