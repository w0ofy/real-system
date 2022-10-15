import React, { forwardRef } from 'react';

import { real } from '@real-system/elements-primitive';
import type { StylishProps } from '@real-system/styled-library';
import { makeTestId } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import type { CommonSwitchProps } from './Switch.model';

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

type SwitchKnobProps = CommonSwitchProps & {
  labelId?: string;
  helpTextId?: string;
  on?: boolean;
  name?: string;
};

const SwitchKnob = forwardRef<HTMLDivElement, SwitchKnobProps>(
  function SwitchKnob(
    {
      on,
      disabled,
      labelId,
      helpTextId,
      id,
      onKeyDown,
      onClick,
      name,
      ...restProps
    }: SwitchKnobProps,
    ref
  ) {
    const style = on ? styleConfig['on'] : styleConfig['off'];

    return (
      <KnobButton
        aria-checked={!!on}
        aria-describedby={helpTextId}
        aria-disabled={disabled}
        aria-labelledby={labelId}
        name={name}
        ref={ref}
        role="switch"
        data-testid={makeTestId('switch-knob-button')}
        borderRadius="pill"
        id={id}
        display="inline-block"
        outline="none"
        px={1}
        position="relative"
        tabIndex={0}
        pointerEvents={disabled ? 'none' : 'initial'}
        transition="background-color .2s ease-in-out, box-shadow .2s ease-in-out"
        width={16}
        onKeyDown={onKeyDown}
        onClick={onClick}
        {...knobBoxModel}
        {...style.knobButton}
        {...restProps}
        overflow="hidden">
        <KnobWrapper
          role="presentation"
          pointerEvents="none"
          data-testid={makeTestId('switch-knob-wrapper')}
          display="block"
          height="100%"
          position="absolute"
          transition="transform .2s ease-in-out"
          width="calc(100% - 0.45rem)"
          {...style.knobWrapper}>
          <Knob
            role="presentation"
            pointerEvents="none"
            data-knob
            data-testid={makeTestId('switch-knob')}
            alignItems="center"
            bgColor="white"
            borderRadius="circle"
            boxShadow="knob"
            display="flex"
            height={7}
            justifyContent="center"
            transition="transform .2s ease-in-out"
            width={7}
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
