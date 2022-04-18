import * as React from 'react';

type As<Props = any> = React.ElementType<Props>;

/**
 * Extract the props of a React element or component
 */
type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T>;

type RealSystemProps = {
  /** data-testid DOM attribute for component. Useful when using react testing library or other testing tools */
  'data-testid'?: string;
  /** pass a custom class name. Useful for when wrapping components with styled or need to use classic stylesheets. */
  className?: string;
};

type InternalRealSystemProps = {
  /** real system data attribute for tracking component usage or other things */
  'data-real-system'?: string;
};

type RealSystemElementProps<T extends As = any> = T extends As
  ? PropsOf<T> & RealSystemProps
  : RealSystemProps;

export type { As, InternalRealSystemProps, PropsOf, RealSystemElementProps };
