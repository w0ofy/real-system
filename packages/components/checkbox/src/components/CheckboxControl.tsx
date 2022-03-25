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
            ? 'gray-400'
            : 'blue-500-readable'
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

const getSelectedColor = (isHovered: boolean) =>
  isHovered ? 'blue-600' : 'blue-500';
const getErrorColor = (isHovered: boolean) =>
  isHovered ? 'red-600' : 'red-500';

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
    const defaultColor = 'blue-500-readable';

    if (disabled) return 'gray-50';
    if (isSelected) {
      if (errorText) {
        return getErrorColor(isHovered);
      }
      return getSelectedColor(isHovered);
    }
    return defaultColor;
  }, [disabled, isSelected, errorText, isHovered]);

  const borderColor = useMemo(() => {
    const defaultColor = isHovered ? 'gray-300' : 'gray-200';

    if (disabled) return 'gray-200';
    if (errorText) {
      return getErrorColor(isHovered);
    }
    if (isSelected) {
      return getSelectedColor(isHovered);
    }
    if (isFocusedWithin) {
      return 'gray-200';
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
      borderRadius={4}
      transition={transition}
      boxShadow={!isPressed && isFocusedWithin ? 'focus-outline' : 'none'}>
      <CheckboxIcon
        isSelected={isSelected}
        disabled={disabled}
        indeterminate={indeterminate}
      />
    </Box>
  );
};

export { CheckboxControl };
