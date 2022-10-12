import * as React from 'react';

import { DisclosureHeading, DisclosureHeadingProps } from './DisclosureHeading';
import { DisclosureTrigger, DisclosureTriggerProps } from './DisclosureTrigger';

type DisclosureToggleProps = DisclosureHeadingProps &
  Pick<DisclosureTriggerProps, 'hideToggleIcon' | 'disabled'>;

/**
 * A semantic toggle component for `Disclosure`. Should be used to toggle `DisclosureContent`.
 * By default, renders an `h2` element — This can be overriden with the `as` prop
 */
const DisclosureToggle = ({
  children,
  as = 'h2',
  size = 'button',
  hideToggleIcon,
  ...restProps
}: DisclosureToggleProps) => {
  return (
    <DisclosureTrigger hideToggleIcon={hideToggleIcon} {...restProps}>
      <DisclosureHeading as={as} size={size}>
        {children}
      </DisclosureHeading>
    </DisclosureTrigger>
  );
};

export type { DisclosureToggleProps };
export { DisclosureToggle };
