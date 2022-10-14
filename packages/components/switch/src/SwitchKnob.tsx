import React, { forwardRef } from 'react';

import type { AriakitCheckboxProps } from '@real-system/ariakit-library';
import { real } from '@real-system/elements-primitive';
import type { StylishProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';

const Knob = real.span;
const KnobTrack = real.div;
const KnobWrapper = real.span;
const knobBoxModel: StylishProps = {
  boxSizing: 'content-box',
  height: 7,
  py: 1,
};

const styleConfig: Record<'on' | 'off', Record<string, StylishProps>> = {
  on: {
    track: {
      bgColor: 'blue-500',
      _notDisabled: {
        cursor: 'pointer',
        _hover: {
          bgColor: 'blue-600',
          '& [data-knob]': { transform: 'translateX(-105%)' },
        },
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
    track: {
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
};

const SwitchKnob = forwardRef<HTMLDivElement, SwitchKnobProps>(
  function SwitchKnob(
    { checked, disabled, labelId, helpTextId, id, ...props }: SwitchKnobProps,
    ref
  ) {
    const style = checked ? styleConfig['on'] : styleConfig['off'];

    return (
      <KnobTrack
        display="inline-block"
        position="relative"
        width={16}
        p={1}
        borderRadius="pill"
        transition="background-color .2s ease-in-out"
        data-testid={makeTestId('switch-knob-track')}
        ref={ref}
        {...knobBoxModel}
        {...style.track}
        {...props}
        id={id}
        tabIndex={0}
        role="switch"
        overflow="hidden"
        aria-checked={!!checked}
        aria-disabled={disabled}
        aria-labelledby={labelId}
        aria-describedby={helpTextId}>
        <KnobWrapper
          position="absolute"
          display="block"
          width="calc(100% - 0.45rem)"
          height="100%"
          transition="transform .2s ease-in-out"
          data-wrapper
          {...style.knobWrapper}
          role="presentation"
          data-testid={makeTestId('switch-knob-wrapper')}>
          <Knob
            data-knob
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="circle"
            width={7}
            height={7}
            bgColor="white"
            boxShadow="knob"
            transition="transform .2s ease-in-out"
            {...style.knob}
            role="presentation"
            data-testid={makeTestId('switch-knob')}
          />
        </KnobWrapper>
      </KnobTrack>
    );
  }
);

export type { SwitchKnobProps };
export { knobBoxModel, SwitchKnob };
