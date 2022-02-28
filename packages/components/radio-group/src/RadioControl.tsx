import React, { useCallback, useMemo } from 'react';

import { UseInteractionsReturnValue } from '@real-system/a11y-library';
import { Box } from '@real-system/box-primitive';
import { Flex } from '@real-system/flex';

type RadioControlProps = {
  disabled?: boolean;
  isSelected: boolean;
  errorText?: string;
} & Pick<
  UseInteractionsReturnValue,
  'isPressed' | 'isFocusedWithin' | 'isHovered'
>;

/** @todo standardize transitions */
const selectedHoverColor = 'color-background-brand-strong-3';
const selectedColor = 'color-background-brand';
const errorHoverColor = 'color-background-danger-strong-3';
const errorColor = 'color-background-danger';
const transition =
  'box-shadow 150ms ease-in, background-color 150ms ease-in, border-color 100ms ease-in';
const getSelectedColor = (isHovered: boolean) =>
  isHovered ? selectedHoverColor : selectedColor;
const getErrorColor = (isHovered: boolean) =>
  isHovered ? errorHoverColor : errorColor;

const RadioControl = ({
  disabled,
  isSelected,
  isHovered,
  isPressed,
  isFocusedWithin,
  errorText,
}: RadioControlProps) => {
  const backgroundColor = useCallback(
    (isDot = false) => {
      const defaultColor = 'color-background-brand-contrast';

      if (disabled) return 'color-background-disabled-weak-5';
      if (isSelected && !isDot) {
        if (errorText) {
          return getErrorColor(isHovered);
        }
        return getSelectedColor(isHovered);
      }
      return defaultColor;
    },
    [disabled, isSelected, errorText, isHovered]
  );

  const borderColor = useMemo(() => {
    const defaultColor = isHovered
      ? 'color-border-neutral-weak-2'
      : 'color-border-neutral-weak-5';

    if (disabled) return 'color-border-disabled';
    if (errorText) {
      return getErrorColor(isHovered);
    }
    if (isSelected) {
      return getSelectedColor(isHovered);
    }
    if (isFocusedWithin) {
      return 'color-border-neutral';
    }

    return defaultColor;
  }, [isHovered, disabled, errorText, isSelected, isFocusedWithin]);

  return (
    <Flex
      as="span"
      shrink={0}
      xAlignContent="center"
      yAlignContent="center"
      width={8}
      height={8}
      marginRight={4}
      borderWidth="1px"
      borderStyle="solid"
      borderColor={borderColor}
      borderRadius="border-radius-circle"
      boxShadow={!isPressed && isFocusedWithin ? 'shadow-focus' : 'none'}
      backgroundColor={backgroundColor()}
      transition={transition}>
      <Box
        as="span"
        width={3}
        height={3}
        borderRadius="border-radius-circle"
        backgroundColor={backgroundColor(true)}
      />
    </Flex>
  );
};

export { RadioControl };
