import React, { useRef } from 'react';
import { forwardRef } from 'react';

import { useInteractions } from '@real-system/a11y-library';
import type { AriakitRadioProps } from '@real-system/ariakit-library';
import { AriakitRadio } from '@real-system/ariakit-library';
import { Text } from '@real-system/typography';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { RadioControl, RadioLabel } from './components';
import { useRadioGroupStateContext } from './Radio.context';

/** Radio */
type RadioProps = AriakitRadioProps;

/**
 * @description `Radio` component for `RadioGroup`.
 * @todo remove a11y library usage
 */
const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { value, disabled: disabledProp, children, ...restProps },
  ref
) {
  const state = useRadioGroupStateContext();

  const disabled = state.disabled || disabledProp;

  const { hoverProps, pressProps, focusWithinProps, ...restInteractions } =
    useInteractions({ disabled });
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);

  return (
    <Text.Label
      display="inline-flex"
      disabled={disabled}
      {...hoverProps}
      {...pressProps}
      {...focusWithinProps}>
      <VisuallyHidden>
        <AriakitRadio
          ref={mergedRef}
          value={value}
          disabled={disabled}
          name={state.name}
          {...restProps}
        />
      </VisuallyHidden>
      <RadioLabel disabled={disabled}>
        <>
          <RadioControl
            isInvalid={state.hasError}
            isDisabled={disabled}
            isSelected={state.value === value}
            {...restInteractions}
          />
          {children}
        </>
      </RadioLabel>
    </Text.Label>
  );
});

export type { RadioProps };
export { Radio };
