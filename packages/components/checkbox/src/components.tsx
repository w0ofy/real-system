import React, { forwardRef, useMemo } from 'react';

import { Box } from '@real-system/box';
import { Flex } from '@real-system/flex';
import { Icon } from '@real-system/icon';
import { Label } from '@real-system/typography';

import { UseInteractionsReturnValue } from './utils';

type CheckboxLabelProps = { children: React.ReactNode; disabled?: boolean };

const CheckboxLabel = ({ children, disabled }: CheckboxLabelProps) => {
  return (
    <Box
      as="span"
      color={disabled ? 'color-text-strong-3' : 'color-text'}
      fontFamily="font-family-text"
      fontSize={1}
      fontWeight={1}
      lineHeight={1}
      mb={0}>
      {children}
    </Box>
  );
};

type CheckboxIconProps = { isSelected: boolean; disabled?: boolean };

const CheckboxIcon = ({ isSelected, disabled }: CheckboxIconProps) => {
  return (
    <Icon
      icon="check"
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
} & UseInteractionsReturnValue;

const selectedHoverColor = 'color-background-brand-strong-3';
const selectedColor = 'color-background-brand';

const CheckboxControl = ({
  disabled,
  isSelected,
  isHovered,
  isPressed,
  isFocusedWithin,
}: CheckboxControlProps) => {
  const backgroundColor = useMemo(() => {
    let color = 'color-background-brand-inverse';
    if (isSelected) {
      color = isHovered ? selectedHoverColor : selectedColor;
    }
    return color;
  }, [isSelected, isHovered]);

  const borderColor = useMemo(() => {
    let color = isHovered
      ? 'color-border-neutral-strong-5'
      : 'color-border-neutral-weak-2';
    if (isSelected) {
      color = isHovered ? selectedHoverColor : selectedColor;
    }
    return color;
  }, [isHovered, isSelected]);

  return (
    <Box
      as="span"
      width={8}
      height={8}
      margin={2}
      borderStyle="solid"
      borderWidth={1}
      backgroundColor={
        disabled ? 'color-background-disabled-weak-5' : backgroundColor
      }
      borderColor={disabled ? 'color-border-disabled' : borderColor}
      borderRadius={1}
      transition="box-shadow 150ms ease-in, background-color 150ms ease-in, border-color 100ms ease-in"
      boxShadow={!isPressed && isFocusedWithin ? 'shadow-focus' : 'none'}>
      <CheckboxIcon isSelected={isSelected} disabled={disabled} />
    </Box>
  );
};

type CheckboxWrapperProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & UseInteractionsReturnValue;

const CheckboxWrapper = forwardRef<HTMLLabelElement, CheckboxWrapperProps>(
  function CheckboxWrapper(
    { children, disabled, hoverProps, pressProps, focusWithinProps },
    ref
  ) {
    return (
      <Label
        ref={ref}
        display="inline-flex"
        disabled={disabled}
        {...hoverProps}
        {...pressProps}
        {...focusWithinProps}>
        <Flex as="span" xAlignContent="center" yAlignContent="center">
          {children}
        </Flex>
      </Label>
    );
  }
);

export { CheckboxControl, CheckboxLabel, CheckboxWrapper };
