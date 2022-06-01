import React, { forwardRef } from 'react';

import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';
import { real } from '@real-system/elements-primitive';
import { Icon } from '@real-system/icon';

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
} & RealElementPrimitiveProps<'a'>;

/**
 * Links are accessible elements used primarily for navigation.
 *
 * `Link` is capable of integrating with routing libraries like
 * React Router, Reach Router and Next.js Link.
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, external, showExternal = false, ...restProps },
  ref
) {
  const externalProps = external ? EXTERNAL_LINK_PROPS : {};
  return (
    <real.a
      fontScale="link"
      fontWeight="link"
      letterSpacing="link"
      margin={0}
      {...externalProps}
      color="blue-500"
      textDecoration="none"
      borderRadius={3}
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
      {...restProps}
      ref={ref}>
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
    </real.a>
  );
});

export type { LinkProps };
export { Link };
