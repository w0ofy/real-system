import React from 'react';

import { Box, BoxStyleProps } from '@real-system/box';

const makePositionalStyles = (isSuffix = false) => {
  let styles: BoxStyleProps = {
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    borderRight: 1,
  };
  if (isSuffix) {
    styles = {
      borderBottomRightRadius: 2,
      borderTopRightRadius: 2,
      borderLeft: 1,
    };
  }
  return styles;
};

const makeColorStyles = (isDisabled = false) => {
  const styles = {
    backgroundColor: 'color-background-disabled-weak-5',
    borderColor: 'color-border-disabled',
  };
  if (isDisabled) {
    styles.backgroundColor = 'none';
  }
  return styles;
};

export type AddonProps = {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  isSuffix?: boolean;
};

const Addon = React.forwardRef<HTMLDivElement, AddonProps>(function Addon(
  { children, disabled, isSuffix = false },
  ref
) {
  const colorStyles = makeColorStyles(disabled);
  const positionalStyles = makePositionalStyles(isSuffix);

  if (children == null) return null;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      lineHeight={3}
      py={5}
      px={4}
      {...positionalStyles}
      {...colorStyles}
      ref={ref}>
      {children}
    </Box>
  );
});

export { Addon };
