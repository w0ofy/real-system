import * as React from 'react';

import { safelySpreadBoxProps } from '@real-system/box-primitive';
import { InputBox } from '@real-system/input';
import type { RealSystemElementProps } from '@real-system/types-library';
import { makeTestId } from '@real-system/utils-library';

import { TextAreaElement } from './TextAreaElement';
import { TextAreaProps } from './types';

const addonProps = {
  height: 'unset',
  padding: 4,
  paddingTop: 5,
  alignItems: 'flex-start',
  'data-testid': makeTestId('text-area-input-box-addon'),
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    { children, disabled, error, prefix, suffix, readOnly, ...props },
    ref
  ) {
    // size, height and width should never get passed down
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { size, height, width, ...restProps } = props;
    return (
      <InputBox
        disabled={disabled}
        error={error}
        suffix={suffix}
        prefix={prefix}
        readOnly={readOnly}
        addonProps={addonProps}
        data-testid={makeTestId('text-area-input-box')}>
        <TextAreaElement
          data-testid={makeTestId('text-area')}
          {...safelySpreadBoxProps(restProps)}
          async
          aria-invalid={error}
          aria-readonly={readOnly}
          disabled={disabled}
          readOnly={readOnly}
          ref={ref}
          rows={3}
          spellCheck>
          {children}
        </TextAreaElement>
      </InputBox>
    );
  }
);

export type { TextAreaProps };
export { TextArea };
