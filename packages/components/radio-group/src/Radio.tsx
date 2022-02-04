import React, { useRef } from 'react';
import { forwardRef } from 'react';

import { Flex } from '@real-system/flex';
import { useInteractions, useRadio } from '@real-system/react-aria-library';
import { Label } from '@real-system/typography';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { useRadioGroupContext } from './RadioContext';
import { RadioControl } from './RadioControl';
import { RadioLabel } from './RadioLabel';
import { RadioProps } from './types';
import { restoreRadioProps } from './utils';

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  props,
  ref
) {
  const restoredProps = restoreRadioProps(props);

  const state = useRadioGroupContext();
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);
  const { inputProps } = useRadio(
    restoredProps,
    state,
    mergedRef as React.RefObject<HTMLInputElement>
  );
  const { hoverProps, pressProps, focusWithinProps, ...restInteractions } =
    useInteractions(restoredProps);

  const { value, isDisabled, children } = restoredProps;
  const isSelected = state.selectedValue === value;
  const isVertical = state.orientation === 'vertical' ? true : false;

  return (
    <Label
      display="inline-flex"
      disabled={isDisabled}
      _notLast={isVertical ? { mb: 5 } : { mr: 5 }}
      {...hoverProps}
      {...pressProps}
      {...focusWithinProps}>
      <Flex as="span" xAlignContent="center" yAlignContent="center">
        <VisuallyHidden>
          <input {...inputProps} ref={mergedRef} />
        </VisuallyHidden>
        <RadioControl
          errorText={state.errorText}
          disabled={isDisabled}
          isSelected={isSelected}
          {...restInteractions}
        />
        <RadioLabel disabled={isDisabled}>{children}</RadioLabel>
      </Flex>
    </Label>
  );
});

export type { RadioProps };
export { Radio };
