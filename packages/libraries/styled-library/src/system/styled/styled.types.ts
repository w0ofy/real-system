import type { StylishProps } from '../props';

import {
  As,
  ComponentWithAs,
  CSSWithMultiValues,
  PropsOf,
  RecursiveCSSObject,
  StyledDict,
  StyledPropsWithChildren,
} from './styled.types.helpers';

/**
 * type helper for `styled`'s `toCSSObject` function
 */
type CSSObject = RecursiveCSSObject<CSSWithMultiValues>;

type StaticProps = {
  /** data-testid DOM attribute for component. Useful when using @testing-library or other testing tools */
  'data-testid'?: string;
  /** pass a custom class name. Useful for when wrapping components with styled or need to use classic stylesheets. */
  className?: string;
};

type RealSystemElementProps<T extends As = any> =
  T extends keyof JSX.IntrinsicElements
    ? PropsOf<T> & StaticProps
    : StaticProps;

type RealSystemCustomProps<P = StyledDict> = {
  /**
   * Override styles with sx
   */
  sx?: StyleObjectOrFn<P>;
  /**
   * The element's ref
   */
  ref?: any;
} & StaticProps;

type InternalRealSystemComponentProps = {
  /** real system data attribute for tracking component usage and things */
  'data-real-system'?: string;
};

type RealSystemComponentProps<T extends As = any, P = StyledDict> = PropsOf<T> &
  RealSystemCustomProps<P> &
  StyledPropsWithChildren<P> &
  StylishProps;

/**
 * @todo Do we need this? Or just RealSystemComponentProps?
 */
type StyledComponentProps<P = StyledDict> = StyledPropsWithChildren<P> &
  RealSystemCustomProps<P> &
  StylishProps;

type RealSystemComponent<T extends As, P = StyledDict> = ComponentWithAs<
  T,
  StyledComponentProps<P>
>;

type FunctionCSSInterpolation<P = StyledDict> = {
  (props: P): CSSObject;
};

type StyleObjectOrFn<P = StyledDict> = CSSObject | FunctionCSSInterpolation<P>;

export type {
  CSSObject,
  InternalRealSystemComponentProps,
  RealSystemComponent,
  RealSystemComponentProps,
  RealSystemCustomProps,
  RealSystemElementProps,
  StyleObjectOrFn,
};
