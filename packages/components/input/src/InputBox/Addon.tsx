import React, { useMemo } from 'react';

import { Box, BoxStyleProps } from '@real-system/box-primitive';
import { majorScale } from '@real-system/theme-library';
import type { RealSystemElementProps } from '@real-system/utils-library';
import { makeTestId } from '@real-system/utils-library';

const makePositionalStyles = (isSuffix = false) => {
  let styles: BoxStyleProps = {
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderRight: 1,
  };
  if (isSuffix) {
    styles = {
      borderBottomRightRadius: 4,
      borderTopRightRadius: 4,
      borderLeft: 1,
    };
  }
  return styles;
};

const makeColorStyles = (isDisabled = false) => {
  const styles = {
    backgroundColor: 'gray-50',
    borderColor: 'gray-100',
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
} & BoxStyleProps &
  RealSystemElementProps;

const Addon = React.forwardRef<HTMLDivElement, AddonProps>(function Addon(
  { children, disabled, isSuffix = false, ...restProps },
  ref
) {
  const colorStyles = useMemo(() => makeColorStyles(disabled), [disabled]);
  const positionalStyles = useMemo(
    () => makePositionalStyles(isSuffix),
    [isSuffix]
  );

  if (children == null) return null;

  return (
    <Box
      data-testid={makeTestId('input-box-addon')}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={16}
      lineHeight={majorScale(4)}
      paddingX={4}
      {...positionalStyles}
      {...colorStyles}
      {...restProps}
      ref={ref}>
      {children}
    </Box>
  );
});

export { Addon };
