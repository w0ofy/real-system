import React, { forwardRef } from 'react';

import type { AriakitCheckboxProps } from '@real-system/ariakit-library';
import { real } from '@real-system/elements-primitive';
import type { StylishProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

const Knob = real.span;
const KnobButton = real.div;
const KnobWrapper = real.span;
const knobBoxModel: StylishProps = {
  boxSizing: 'content-box',
  height: 7,
  py: 1,
};

const styleConfig: Record<'on' | 'off', Record<string, StylishProps>> = {
  on: {
    knobButton: {
      bgColor: 'blue-500',
      _notDisabled: {
        cursor: 'pointer',
        _hover: {
          bgColor: 'blue-600',
          '& [data-knob]': { transform: 'translateX(-105%)' },
        },
      },
      _focus: {
        boxShadow: 'focus-outline',
      },
      _active: {
        boxShadow: 'none',
      },
      _disabled: {
        bgColor: 'blue-200',
        cursor: 'default',
      },
    },
    knobWrapper: {
      transform: 'translateX(100%)',
    },
    knob: {
      transform: 'translateX(-100%)',
    },
  },
  off: {
    knobButton: {
      bgColor: 'gray-200',
      _notDisabled: {
        cursor: 'pointer',
        _hover: {
          bgColor: 'gray-300',
          '& [data-knob]': { transform: 'translateX(5%)' },
        },
      },
      _disabled: {
        bgColor: 'gray-100',
        cursor: 'default',
      },
      _focus: {
        boxShadow: 'focus-outline',
      },
      _active: {
        boxShadow: 'none',
      },
    },
    knobWrapper: {
      transform: 'translateX(0)',
    },
    knob: {
      transform: 'translateX(0)',
    },
  },
};

type SwitchKnobProps = AriakitCheckboxProps & {
  labelId?: string;
  helpTextId?: string;
  on?: boolean;
};

const SwitchKnob = forwardRef<HTMLDivElement, SwitchKnobProps>(
  function SwitchKnob(
    { on, disabled, labelId, helpTextId, id, ...props }: SwitchKnobProps,
    ref
  ) {
    const style = on ? styleConfig['on'] : styleConfig['off'];

    return (
      <KnobButton
        aria-checked={!!on}
        aria-describedby={helpTextId}
        aria-disabled={disabled}
        aria-labelledby={labelId}
        type="button"
        borderRadius="pill"
        data-testid={makeTestId('switch-knob-button')}
        display="inline-block"
        id={id}
        outline="none"
        px={1}
        position="relative"
        ref={ref}
        role="switch"
        tabIndex={0}
        transition="background-color .2s ease-in-out, box-shadow .2s ease-in-out"
        width={16}
        {...knobBoxModel}
        {...style.knobButton}
        {...props}
        overflow="hidden">
        <KnobWrapper
          data-testid={makeTestId('switch-knob-wrapper')}
          display="block"
          height="100%"
          position="absolute"
          role="presentation"
          transition="transform .2s ease-in-out"
          width="calc(100% - 0.45rem)"
          aria-hidden="true"
          {...style.knobWrapper}>
          <Knob
            alignItems="center"
            bgColor="white"
            borderRadius="circle"
            boxShadow="knob"
            data-knob
            data-testid={makeTestId('switch-knob')}
            display="flex"
            height={7}
            justifyContent="center"
            role="presentation"
            transition="transform .2s ease-in-out"
            width={7}
            aria-hidden="true"
            {...style.knob}>
            <VisuallyHidden>{on ? 'on' : 'off'}</VisuallyHidden>
          </Knob>
        </KnobWrapper>
      </KnobButton>
    );
  }
);

export type { SwitchKnobProps };
export { knobBoxModel, SwitchKnob };
