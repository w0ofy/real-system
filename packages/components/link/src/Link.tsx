import React, { forwardRef } from 'react';

import { Icon } from '@real-system/icon';
import { TextPrimitive, TextPrimitiveProps } from '@real-system/text-primitive';
import type { RealSystemElementProps } from '@real-system/utils-library';

import { EXTERNAL_LINK_PROPS } from './link.constants';

type LinkProps = {
  /**
   *  If `true`, the link will open in new tab
   */
  external?: boolean;
  /**
   * If `true` an external link icon will be displayed to the right of the link text.
   *
   * @default false (`true` if external is `true`)
   */
  showExternal?: boolean;
} & Omit<RealSystemElementProps<'a'>, keyof TextPrimitiveProps> &
  Partial<TextPrimitiveProps>;

/**
 * Links are accessible elements used primarily for navigation.
 *
 * Capable of integrating with routing libraries like
 * React Router, Reach Router and Next.js Link.
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, external, showExternal = false, ...restProps },
  ref
) {
  const externalProps = external ? EXTERNAL_LINK_PROPS : {};
  return (
    <TextPrimitive
      as="a"
      {...externalProps}
      ref={ref}
      color="blue-500"
      textDecoration="none"
      borderRadius={1}
      _hover={{
        color: 'blue-600',
        textDecoration: 'underline',
      }}
      _focus={{
        boxShadow: 'focus-outline',
        outline: 'underline',
      }}
      _active={{
        color: 'blue-700',
        textDecoration: 'underline',
      }}
      cursor="pointer"
      {...restProps}>
      {children}
      {showExternal ? (
        <Icon
          icon="external-link"
          size="sm"
          display="inline-block"
          verticalAlign="text-bottom"
          marginLeft={2}
        />
      ) : null}
    </TextPrimitive>
  );
});

export type { LinkProps };
export { Link };
