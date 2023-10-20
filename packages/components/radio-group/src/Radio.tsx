import React from 'react';
import { forwardRef } from 'react';

import { useInteractions } from '@real-system/a11y-library';
import type { AriakitRadioProps } from '@real-system/ariakit-library';
import { AriakitRadio } from '@real-system/ariakit-library';
import { Text } from '@real-system/typography';
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
  const store = useRadioGroupStateContext();
  const storeValue = store.useState('value');
  const disabled = store.disabled || disabledProp;

  const { hoverProps, pressProps, focusWithinProps, ...restInteractions } =
    useInteractions({ disabled });

  return (
    <Text.Label
      display="inline-flex"
      disabled={disabled}
      {...hoverProps}
      {...pressProps}
      {...focusWithinProps}>
      <VisuallyHidden>
        <AriakitRadio
          ref={ref}
          value={value}
          disabled={disabled}
          name={store.name}
          {...restProps}
        />
      </VisuallyHidden>
      <RadioLabel disabled={disabled}>
        <>
          <RadioControl
            isInvalid={store.hasError}
            isDisabled={disabled}
            isSelected={storeValue === value}
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
