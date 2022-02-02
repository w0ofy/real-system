import React, { useMemo } from 'react';

import { Box } from '@real-system/box-primitive';
import { Flex } from '@real-system/flex';
import { UseInteractionsReturnValue } from '@real-system/react-aria-library';

type RadioControlProps = {
  disabled?: boolean;
  isSelected: boolean;
} & Pick<
  UseInteractionsReturnValue,
  'isPressed' | 'isFocusedWithin' | 'isHovered'
>;

/** @todo standardize transitions */
const transition =
  'box-shadow 150ms ease-in, background-color 150ms ease-in, border-color 100ms ease-in';
const selectedHoverColor = 'color-background-brand-strong-3';
const selectedColor = 'color-background-brand';
const getSelectedColor = (isHovered: boolean) =>
  isHovered ? selectedHoverColor : selectedColor;

const RadioControl = ({
  disabled,
  isSelected,
  isHovered,
  isPressed,
  isFocusedWithin,
}: RadioControlProps) => {
  const backgroundColor = useMemo(() => {
    const defaultColor = 'color-background-brand-contrast';

    if (disabled) return 'color-background-disabled-weak-5';
    if (isSelected) {
      return getSelectedColor(isHovered);
    }
    return defaultColor;
  }, [isSelected, isHovered, disabled]);

  const borderColor = useMemo(() => {
    const defaultColor = isHovered
      ? 'color-border-neutral-weak-2'
      : 'color-border-neutral-weak-5';

    if (disabled) return 'color-border-disabled';
    if (isSelected) {
      return getSelectedColor(isHovered);
    }
    if (isFocusedWithin) {
      return 'color-border-neutral';
    }

    return defaultColor;
  }, [isHovered, disabled, isSelected, isFocusedWithin]);

  return (
    <Flex
      as="span"
      shrink={0}
      xAlignContent="center"
      yAlignContent="center"
      width={8}
      height={8}
      mr={4}
      borderWidth="1px"
      borderStyle="solid"
      borderColor={borderColor}
      borderRadius="border-radius-circle"
      boxShadow={!isPressed && isFocusedWithin ? 'shadow-focus' : 'none'}
      backgroundColor={backgroundColor}
      transition={transition}>
      <Box
        as="span"
        width={3}
        height={3}
        borderRadius="border-radius-circle"
        backgroundColor={isSelected ? 'white' : 'transparent'}
      />
    </Flex>
  );
};

export { RadioControl };
