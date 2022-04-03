import React from 'react';

import {
  AriakitSelect,
  AriakitSelectOptions,
  useAriakitSelectState,
} from '@real-system/ariakit-library';
import { Box, boxAs } from '@real-system/box-primitive';
import { spreadStyleProps, StylishProps } from '@real-system/styling-library';
import { merge } from '@real-system/utils-library';

import { maybeAutoPlacements } from './Select.utils';
import { SelectContextProvider } from './SelectContext';
import { SelectProps } from './types';

const BoxAsSelect = boxAs<AriakitSelectOptions>(AriakitSelect);

const baseStyles: StylishProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  bg: 'white',
  border: 'none',
  borderRadius: 4,
  transition: 'box-shadow 150ms ease-in, border-color 150ms ease-in',
  bgColor: 'white',
  outline: 'none',
  boxShadow: 'none',
  cursor: 'pointer',
  height: 16,
  paddingX: 6,
  margin: 0,
  fontSize: 1,
  fontWeight: 3,
  fontFamily: 'body',
  _hover: {},
  _focusWithin: {},
  _active: { boxShadow: 'none' },
};

const selectStyles: StylishProps = merge(baseStyles, {
  bg: 'none',
  border: '1px solid',
  color: 'gray-500',
  borderColor: 'gray-200',
  _hover: {
    borderColor: 'gray-300',
  },
  _focusWithin: {
    borderColor: 'gray-400',
    boxShadow: 'focus-outline',
  },
  _expanded: {
    borderColor: 'gray-400',
  },
  _disabled: {
    color: 'gray-300',
    bgColor: 'gray-50',
    borderColor: 'gray-200',
    cursor: 'default',
  },
  _readOnly: {
    color: 'gray-300',
    bgColor: 'gray-50',
    borderColor: 'gray-200',
    _hover: { borderColor: 'gray-300' },
    _focusWithin: {
      boxShadow: 'focus-outline',
      borderColor: 'gray-300',
    },
    _active: { borderColor: 'gray-300' },
  },
});

const selectErrorStyles: StylishProps = merge(baseStyles, {
  border: '1px solid',
  borderColor: 'red-500',
  _hover: { borderColor: 'red-600' },
  _focusWithin: {
    boxShadow: 'focus-outline',
    borderColor: 'red-600',
  },
  _active: { borderColor: 'red-600' },
});

/**
 * @todo how to nest Label inside Select
 */
const Select = ({
  children,
  placement = 'bottom',
  flip = true,
  ...restProps
}: SelectProps) => {
  const state = useAriakitSelectState({
    placement,
    gutter: 2,
    sameWidth: true,
    flip: maybeAutoPlacements(placement, flip),
    ...restProps,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      {...spreadStyleProps(restProps)}>
      <SelectContextProvider state={state}>
        <BoxAsSelect {...selectStyles} state={state} />
        {children}
      </SelectContextProvider>
    </Box>
  );
};

export type { SelectProps };
export { Select };
