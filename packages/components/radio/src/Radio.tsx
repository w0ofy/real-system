import React, { useRef } from 'react';
import { forwardRef } from 'react';

import { Flex } from '@real-system/flex';
import {
  Aria_AriaRadioProps,
  useInteractions,
  useRadio,
} from '@real-system/react-aria-library';
import { Label } from '@real-system/typography';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { useRadioGroupContext } from './RadioContext';
import { RadioControl } from './RadioControl';
import { RadioLabel } from './RadioLabel';

type RadioProps = Aria_AriaRadioProps;

const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  props,
  ref
) {
  const { children } = props;
  const { hoverProps, pressProps, focusWithinProps, ...restInteractions } =
    useInteractions(props);
  const state = useRadioGroupContext();
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);
  const { inputProps } = useRadio(
    props,
    state,
    mergedRef as React.RefObject<HTMLInputElement>
  );

  const isSelected = state.selectedValue === props.value;

  return (
    <Label
      display="inline-flex"
      disabled={props.isDisabled}
      _notLast={{ mb: 5 }}
      {...hoverProps}
      {...pressProps}
      {...focusWithinProps}>
      <Flex as="span" xAlignContent="center" yAlignContent="center">
        <VisuallyHidden>
          <input {...inputProps} ref={mergedRef} />
        </VisuallyHidden>
        <RadioControl
          disabled={props.isDisabled}
          isSelected={isSelected}
          {...restInteractions}
        />
        <RadioLabel disabled={props.isDisabled}>{children}</RadioLabel>
      </Flex>
    </Label>
  );
});

export type { RadioProps };
export { Radio };
