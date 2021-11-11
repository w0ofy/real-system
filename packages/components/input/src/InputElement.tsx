import React, { forwardRef } from 'react';

import { Box } from '@real-system/box';

import { InputProps } from './types';

const InputElement = forwardRef<HTMLInputElement, InputProps>(
  function InputElement(props, ref) {
    return (
      <Box
        as="input"
        appearance="none"
        display="block"
        width="100%"
        py={6}
        px={5}
        m={0}
        fontFamily="inherit"
        fontSize={2}
        fontWeight={1}
        lineHeight={4}
        backgroundColor="transparent"
        border="none"
        borderRadius={1}
        boxShadow="none"
        color="inherit"
        cursor={
          (props.type === 'date' || props.type === 'time') &&
          !props.readOnly &&
          !props.disabled
            ? 'text'
            : 'auto'
        }
        outline="none"
        resize="none"
        ref={ref}
        _placeholder={{
          fontStyle: 'italic',
          color: 'color-text-neutral-weaker',
        }}
        _focus_placeholder={{
          fontStyle: 'italic',
          color: 'color-text-neutral-weaker',
        }}
        _focus={{ outline: 'none' }}
        {...props}
      />
    );
  }
);

export { InputElement };
