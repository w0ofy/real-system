import React, { useRef } from 'react';
import { forwardRef } from 'react';

import type { AriaRadioProps } from '@real-system/a11y-library';
import { useInteractions, useRadio } from '@real-system/a11y-library';
import { useField } from '@real-system/field';
import { Flex } from '@real-system/flex';
import type { InvalidConfig } from '@real-system/typography';
import { Text } from '@real-system/typography';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { RadioControl, RadioLabel } from './components';
import { useRadioGroupContext } from './Radio.context';

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

  const { disabled } = useField({ disabled: disabledProp });
  const state = useRadioGroupContext();
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);

  const { inputProps } = useRadio(
    { ...props, disabled },
    state,
    mergedRef as React.RefObject<HTMLInputElement>
  );
  const { hoverProps, pressProps, focusWithinProps, ...restInteractions } =
    useInteractions({ disabled });

  return (
    <Text.Label
      display="inline-flex"
      disabled={disabled}
      mb={2}
      _notLast={
        state.orientation === 'vertical'
          ? { marginBottom: 5 }
          : { marginRight: 5 }
      }
      {...hoverProps}
      {...pressProps}
      {...focusWithinProps}>
      <Flex as="span" xAlignContent="center" yAlignContent="center">
        <VisuallyHidden>
          <input {...inputProps} ref={mergedRef} />
        </VisuallyHidden>
        <RadioControl
          isInvalid={state.invalid?.status}
          isDisabled={disabled}
          isSelected={state.selectedValue === value}
          {...restInteractions}
        />
        <RadioLabel disabled={disabled}>{children}</RadioLabel>
      </Flex>
    </Text.Label>
  );
});

export type { RadioProps };
export { Radio };
