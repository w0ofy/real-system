import React, { forwardRef, useMemo } from 'react';

import { Icon } from '@real-system/icon';
import type { ColorSchemes, ColorTokens } from '@real-system/styled-library';
import { isObject } from '@real-system/utils-library';

import { BaseText } from './BaseText';
import type { CommonTextProps } from './types';

type InvalidConfigProp = {
  status?: boolean;
  message?: string;
  hideIcon?: boolean;
};

export type HelperTextProps = {
  as?: Extract<keyof JSX.IntrinsicElements, 'span' | 'div'>;
  children?: React.ReactNode;
  id?: string;
  invalid?: boolean | InvalidConfigProp;
} & CommonTextProps;

const LABEL_COLORS: Partial<Record<ColorSchemes, ColorTokens>> = {
  red: 'red-500',
  gray: 'gray-500',
};

type InvalidConfig = {
  colorScheme: ColorSchemes;
  message?: string;
  isInvalid?: boolean;
  hideIcon?: boolean;
};

/**
 * @todo clean up errorText:invalid API
 */
const HelperText = forwardRef<HTMLSpanElement, HelperTextProps>(
  function HelperText({ children, as = 'span', invalid, ...restProps }, ref) {
    const { colorScheme, message, isInvalid, hideIcon } =
      useMemo<InvalidConfig>(() => {
        if (isObject(invalid)) {
          const { status, message, hideIcon } = invalid;
          console.log('bool');
          console.log(status);
          return {
            isInvalid: status,
            message,
            colorScheme: status ? 'red' : 'gray',
            hideIcon,
          };
        }

        return {
          isInvalid: invalid,
          colorScheme: invalid ? 'red' : 'gray',
        };
      }, [invalid]);

    return (
      <BaseText
        as={as}
        display="flex"
        alignItems="center"
        padding={0}
        margin={0}
        fontScale="helper"
        fontWeight="helper"
        color={LABEL_COLORS[colorScheme]}
        {...restProps}
        ref={ref}>
        {!hideIcon && isInvalid && (
          <div>
            <Icon
              icon="exclamation-circle"
              solid
              colorScheme={colorScheme}
              marginRight={2}
            />
          </div>
        )}
        <span>{isInvalid && message ? message : children}</span>
      </BaseText>
    );
  }
);

export type { InvalidConfigProp };
export { HelperText };
