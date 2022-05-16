import * as React from 'react';

import { InputBox } from '@real-system/input';
import { preventSpreadingStyleProps } from '@real-system/styling-library';
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
    { children, disabled, error, prefix, suffix, readOnly, ...props },
    ref
  ) {
    return (
      <InputBox
        disabled={disabled}
        error={error}
        suffix={suffix}
        prefix={prefix}
        readOnly={readOnly}
        addonProps={addonProps}
        data-testid={makeTestId('text-area-input-box')}>
        <TextareaElement
          data-testid={makeTestId('text-area')}
          // size, height and width should never get passed down
          {...preventSpreadingStyleProps(props)}
          aria-invalid={error}
          aria-readonly={readOnly}
          disabled={disabled}
          readOnly={readOnly}
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
