import React, { useMemo } from 'react';

import type { UseInteractionsReturnValue } from '@real-system/a11y-library';
import { real } from '@real-system/elements-primitive';
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
      size="sm"
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
  isInvalid?: boolean;
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
  isInvalid,
  indeterminate,
}: CheckboxControlProps) => {
  const backgroundColor = useMemo(() => {
    const defaultColor = 'blue-500-readable';

    if (disabled) return 'gray-50';
    if (isSelected) {
      if (isInvalid) {
        return getErrorColor(isHovered);
      }
      return getSelectedColor(isHovered);
    }
    return defaultColor;
  }, [disabled, isSelected, isInvalid, isHovered]);

  const borderColor = useMemo(() => {
    const defaultColor = isHovered ? 'gray-300' : 'gray-200';

    if (disabled) return 'gray-200';
    if (isInvalid) {
      return getErrorColor(isHovered);
    }
    if (isSelected) {
      return getSelectedColor(isHovered);
    }
    if (isFocusedWithin) {
      return 'gray-200';
    }
    return defaultColor;
  }, [isHovered, disabled, isInvalid, isSelected, isFocusedWithin]);

  return (
    <real.span
      width={9}
      height={9}
      marginRight={4}
      borderStyle="solid"
      borderWidth={1}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={3}
      transition={transition}
      boxShadow={!isPressed && isFocusedWithin ? 'focus-outline' : 'none'}>
      <CheckboxIcon
        isSelected={isSelected}
        disabled={disabled}
        indeterminate={indeterminate}
      />
    </real.span>
  );
};

export { CheckboxControl };
