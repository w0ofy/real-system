import React from 'react';

import type {
  AriakitSelectItemProps,
  AriakitSelectPopoverProps,
  AriakitSelectSeparatorProps,
} from '@real-system/ariakit-library';
import {
  AriakitSelectItem,
  AriakitSelectPopover,
  AriakitSelectSeparator,
} from '@real-system/ariakit-library';
import { boxAs } from '@real-system/box-primitive';

import { useSelectStateContext } from './SelectContext';
import { OmitSelectState } from './types';

type SelectItemProps = OmitSelectState<AriakitSelectItemProps>;

const BoxAsItem = boxAs(AriakitSelectItem);

const SelectItem = (props: SelectItemProps) => {
  return (
    <BoxAsItem
      outline="none"
      display="flex"
      scrollMargin={4}
      alignItems="center"
      gap={4}
      paddingX={7}
      paddingY={3}
      color="gray-500"
      fontSize={1}
      lineHeight={4}
      fontWeight={2}
      fontFamily="body"
      cursor="pointer"
      _hover={{ bgColor: 'gray-50' }}
      _focus={{ bgColor: 'gray-50', color: 'gray-600' }}
      _focusVisible={{ bgColor: 'gray-50', color: 'gray-600' }}
      _active={{ bgColor: 'gray-100', color: 'gray-700' }}
      _disabled={{ backgroundColor: 'none', color: 'gray-300' }}
      {...props}
    />
  );
};

type SelectSeparatorProps = OmitSelectState<AriakitSelectSeparatorProps>;

const SelectSeparator = (props: SelectSeparatorProps) => {
  return <AriakitSelectSeparator {...props} />;
};

type SelectPopoverProps = OmitSelectState<AriakitSelectPopoverProps>;

const BoxAsPopover = boxAs(AriakitSelectPopover);

const SelectPopover = (props: SelectPopoverProps) => {
  const state = useSelectStateContext();
  return (
    <BoxAsPopover
      zIndex="popover"
      display="flex"
      maxHeight="20rem"
      flexDirection="column"
      borderRadius={4}
      border="weak"
      bgColor="white"
      py={3}
      color="white"
      filter="popover"
      outline="none"
      transition="box-shadow 150ms ease-in, border-color 150ms ease-in"
      {...props}
      state={state}
    />
  );
};

export type { SelectItemProps, SelectPopoverProps, SelectSeparatorProps };
export { SelectItem, SelectPopover, SelectSeparator };
