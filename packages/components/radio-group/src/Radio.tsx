import React, { useRef } from 'react';
import { forwardRef } from 'react';

import { useInteractions, useRadio } from '@real-system/a11y-library';
import { Flex } from '@real-system/flex';
import { Text } from '@real-system/typography';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { useRadioGroupContext } from './RadioContext';
import { RadioControl } from './RadioControl';
import { RadioLabel } from './RadioLabel';
import { RadioProps } from './types';

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  props,
  ref
) {
  const { value, disabled, children } = props;
  const state = useRadioGroupContext();
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);
  const { inputProps } = useRadio(
    props,
    state,
    mergedRef as React.RefObject<HTMLInputElement>
  );
  const { interactionProps, ...restInteractions } = useInteractions({
    disabled,
  });

  const isSelected = state.selectedValue === value;
  const isVertical = state.orientation === 'vertical' ? true : false;

  return (
    <Text.Label
      display="inline-flex"
      disabled={disabled}
      mb={2}
      _notLast={isVertical ? { marginBottom: 5 } : { marginRight: 5 }}
      {...interactionProps}
      {...interactionProps}
      {...interactionProps}>
      <Flex as="span" xAlignContent="center" yAlignContent="center">
        <VisuallyHidden>
          <input {...inputProps} ref={mergedRef} />
        </VisuallyHidden>
        <RadioControl
          errorText={state.errorText}
          disabled={disabled}
          isSelected={isSelected}
          {...restInteractions}
        />
        <RadioLabel disabled={disabled}>{children}</RadioLabel>
      </Flex>
    </Text.Label>
  );
});

export type { RadioProps };
export { Radio };
