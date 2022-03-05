import React, { forwardRef } from 'react';

import { Box, BoxProps } from '@real-system/box-primitive';

import { InputProps } from './types';

const getCursor = ({
  disabled,
  readOnly,
  type,
}: InputProps): BoxProps['cursor'] => {
  if ((type === 'date' || type === 'time') && !readOnly && !disabled) {
    return 'text';
  }
  return 'auto';
};

const InputElement = forwardRef<HTMLInputElement, InputProps>(
  function InputElement(props, ref) {
    return (
      <Box
        as="input"
        appearance="none"
        display="block"
        width="100%"
        height={16}
        paddingX={6}
        margin={0}
        fontFamily="inherit"
        fontSize={1}
        fontWeight={1}
        lineHeight={1}
        backgroundColor="transparent"
        border="none"
        borderRadius={2}
        boxShadow="none"
        color="inherit"
        cursor={getCursor(props)}
        outline="none"
        resize="none"
        ref={ref}
        _placeholder={{
          color: 'color-text-neutral-weak-6',
          transition: '150ms all ease-in',
        }}
        _hover_placeholder={{
          color: 'color-text-neutral-weak-4',
        }}
        _focus_placeholder={{
          color: 'color-text-neutral-weak-4',
        }}
        _focus={{ outline: 'none' }}
        _disabled={{ cursor: 'not-allowed' }}
        transition="0.25s all ease-in-out"
        {...props}
      />
    );
  }
);

export { InputElement };
