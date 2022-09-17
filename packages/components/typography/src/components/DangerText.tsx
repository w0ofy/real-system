import React, { forwardRef } from 'react';

import { Icon } from '@real-system/icon';
import { makeTestId } from '@real-system/utils-library';

import type { CommonTextProps, TypographyTags } from '../Text.model';

import { BaseText } from './BaseText';

export type DangerTextProps = {
  as?: TypographyTags;
  hideDangerIcon?: boolean;
} & CommonTextProps;

const DangerText = forwardRef<HTMLSpanElement, DangerTextProps>(
  function DangerText(
    { children, as = 'span', hideDangerIcon = false, ...restProps },
    ref
  ) {
    return (
      <BaseText
        as={as}
        display="flex"
        alignItems="center"
        padding={0}
        margin={0}
        fontScale="danger"
        fontWeight="danger"
        color="red-500"
        data-testid={makeTestId('danger-text')}
        {...restProps}
        ref={ref}>
        {!hideDangerIcon && (
          <span>
            <Icon
              icon="exclamation-circle"
              solid
              colorScheme="red"
              marginRight={2}
            />
          </span>
        )}
        <span>{children}</span>
      </BaseText>
    );
  }
);

export { DangerText };
