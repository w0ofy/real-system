import React, { forwardRef } from 'react';

import type { AriakitSelectItemProps } from '@real-system/ariakit-library';
import { AriakitSelectItem } from '@real-system/ariakit-library';
import { boxAs } from '@real-system/box-primitive';

import { OmitSelectPrivateProps } from './types';

type SelectItemProps = OmitSelectPrivateProps<AriakitSelectItemProps>;

const BoxAsItem = boxAs(AriakitSelectItem);

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  function SelectItem(props, ref) {
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
  }
);

export type { SelectItemProps };
export { SelectItem };
