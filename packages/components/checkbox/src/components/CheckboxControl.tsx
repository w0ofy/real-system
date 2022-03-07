import React, { useMemo } from 'react';

import type { UseInteractionsReturnValue } from '@real-system/a11y-library';
import { Box } from '@real-system/box-primitive';
import { Icon } from '@real-system/icon';

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
            : 'color-background-primary-contrast'
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

const transition =
  'box-shadow 150ms ease-in, background-color 150ms ease-in, border-color 100ms ease-in';

type ColorType = 'border' | 'background';
const getSelectedColor = (isHovered: boolean, type: ColorType = 'background') =>
  isHovered ? `color-${type}-primary-strong-3` : `color-${type}-primary`;
const getErrorColor = (isHovered: boolean, type: ColorType = 'background') =>
  isHovered ? `color-${type}-danger-strong-3` : `color-${type}-danger`;

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
    const defaultColor = 'color-background-primary-contrast';

    if (disabled) {
      return 'color-background-disabled-weak-5';
    }
    if (isSelected) {
      if (errorText) {
        return getErrorColor(isHovered);
      }
      return getSelectedColor(isHovered);
    }
    return defaultColor;
  }, [disabled, isSelected, errorText, isHovered]);

  const borderColor = useMemo(() => {
    const defaultColor = isHovered
      ? 'color-border-neutral-weak-2'
      : 'color-border-neutral-weak-5';

    if (disabled) {
      return 'color-border-disabled';
    }
    if (errorText) {
      return getErrorColor(isHovered, 'border');
    }
    if (isSelected) {
      return getSelectedColor(isHovered, 'border');
    }
    if (isFocusedWithin) {
      return 'color-border-neutral';
    }
    return defaultColor;
  }, [isHovered, disabled, errorText, isSelected, isFocusedWithin]);

  return (
    <Box
      as="span"
      width={8}
      height={8}
      marginRight={4}
      borderStyle="solid"
      borderWidth={1}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={2}
      transition={transition}
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
