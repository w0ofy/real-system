import React, { useRef } from 'react';
import { forwardRef } from 'react';

import type { AriaRadioProps } from '@real-system/a11y-library';
import { useInteractions, useRadio } from '@real-system/a11y-library';
import { AriakitRadio } from '@real-system/ariakit-library';
import { useFieldControl } from '@real-system/field';
import { Flex } from '@real-system/flex';
import type { InvalidConfig } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { RadioControl, RadioLabel } from './components';
import { useRadioGroupStateContext } from './Radio.context';

type CustomProps = {
  disabled?: boolean;
  invalid?: InvalidConfig;
};

/** Radio */
type RadioProps = AriaRadioProps & CustomProps;

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  props,
  ref
) {
  const { value, disabled: disabledProp, children } = props;

  const state = useRadioGroupStateContext();
  const field = useFieldControl();
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);

  const disabled = disabledProp || field.disabled || state.isDisabled;

  const { hoverProps, pressProps, focusWithinProps, ...restInteractions } =
    useInteractions({ disabled });

  console.log(state.value);
  return (
    <Text.Label
      display="inline-flex"
      disabled={disabled}
      {...hoverProps}
      {...pressProps}
      {...focusWithinProps}>
      <Flex as="span" xAlignContent="center" yAlignContent="center">
        <VisuallyHidden>
          <AriakitRadio ref={mergedRef} value={value} />
        </VisuallyHidden>
        <RadioLabel disabled={disabled}>
          <RadioControl
            isInvalid={state.hasError}
            isDisabled={disabled}
            isSelected={state.activeId === mergedRef.current?.id}
            {...restInteractions}
          />
          {children}
        </RadioLabel>
      </Flex>
    </Text.Label>
  );
});

export type { RadioProps };
export { Radio };
