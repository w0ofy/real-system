import React, { forwardRef } from 'react';

import { Box } from '@real-system/box';
import { majorScale } from '@real-system/theme';

import { InputProps } from './types';

const InputElement = forwardRef<HTMLInputElement, InputProps>(
  function InputElement(props, ref) {
    return (
      <Box
        as="input"
        appearance="none"
        display="block"
        width="100%"
        height={16}
        lineHeight={majorScale(4)}
        px={6}
        m={0}
        fontFamily="inherit"
        fontSize={1}
        fontWeight={1}
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
          color: 'color-text-neutral-weak-6',
          transition: '150ms all ease-in',
        }}
        _hover_placeholder={{
          fontStyle: 'italic',
          color: 'color-text-neutral-weak-4',
        }}
        _focus_placeholder={{
          fontStyle: 'italic',
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
