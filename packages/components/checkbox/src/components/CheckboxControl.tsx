import React, { useMemo } from 'react';

import { Box } from '@real-system/box';
import { Icon } from '@real-system/icon';

import { UseInteractionsReturnValue } from '../utils';

type CheckboxIconProps = {
  isSelected: boolean;
  disabled?: boolean;
  indeterminate: boolean | undefined;
};

const CheckboxIcon = ({
  isSelected,
  disabled,
  indeterminate,
}: CheckboxIconProps) => {
  return (
    <Icon
      icon={indeterminate ? 'minus' : 'check'}
      size="xs"
      solid
      color={
        isSelected
          ? disabled
            ? 'color-text-disabled-strong-3'
            : 'color-background-brand-inverse'
          : 'transparent'
      }
    />
  );
};

type CheckboxControlProps = {
  disabled?: boolean;
  isSelected: boolean;
  indeterminate?: boolean;
  errorText?: string;
} & UseInteractionsReturnValue;

const selectedHoverColor = 'color-background-brand-strong-3';
const selectedColor = 'color-background-brand';
const errorHoverColor = 'color-background-danger-strong-3';
const errorColor = 'color-background-danger';

const CheckboxControl = ({
  disabled,
  isSelected,
  isHovered,
  isPressed,
  isFocusedWithin,
  errorText,
  indeterminate,
}: CheckboxControlProps) => {
  const backgroundColor = useMemo(() => {
    const defaultColor = 'color-background-brand-inverse';

    if (isSelected) {
      if (errorText) {
        return isHovered ? errorHoverColor : errorColor;
      }
      return isHovered ? selectedHoverColor : selectedColor;
    }
    return defaultColor;
  }, [isSelected, isHovered, errorText]);

  const borderColor = useMemo(() => {
    const defaultColor = isHovered
      ? 'color-border-neutral-weak-2'
      : 'color-border-neutral-weak-5';

    if (errorText) {
      return isHovered ? errorHoverColor : errorColor;
    }
    if (isSelected) {
      return isHovered ? selectedHoverColor : selectedColor;
    }
    if (isFocusedWithin) {
      return 'color-border-neutral';
    }

    return defaultColor;
  }, [isHovered, errorText, isSelected, isFocusedWithin]);

  return (
    <Box
      as="span"
      width={8}
      height={8}
      mr={4}
      borderStyle="solid"
      borderWidth={1}
      backgroundColor={
        disabled ? 'color-background-disabled-weak-5' : backgroundColor
      }
      borderColor={disabled ? 'color-border-disabled' : borderColor}
      borderRadius={1}
      transition="box-shadow 150ms ease-in, background-color 150ms ease-in, border-color 100ms ease-in"
      boxShadow={!isPressed && isFocusedWithin ? 'shadow-focus' : 'none'}>
      <CheckboxIcon
        isSelected={isSelected}
        disabled={disabled}
        indeterminate={indeterminate}
      />
    </Box>
  );
};

export { CheckboxControl };
