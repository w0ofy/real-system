import * as React from 'react';

import type {
  PseudoProps,
  StyleProps,
  StylishProps,
} from '../styleProps/index';

import {
  As,
  ComponentWithAs,
  CSSWithMultiValues,
  PropsOf,
  RecursiveCSSObject,
  StyledDict,
} from './styled.types.helpers';

/**
 * type helper for `styled`'s `toCSSObject` function
 */
type CSSObject = RecursiveCSSObject<CSSWithMultiValues>;

type CustomProps<P = StyledDict> = {
  /**
   * Override styles with sx
   */
  sx?: StyleObjectOrFn<P>;
  /**
   * The element's ref
   */
  ref?: any;
  /** data-testid DOM attribute for component. Useful when using @testing-library or other testing tools */
  'data-testid'?: string;
  /** pass a custom class name. Useful for when wrapping components with styled or need to use classic stylesheets. */
  className?: string;
};

type InternalRealSystemComponentProps = {
  /** real system data attribute for tracking component usage and things */
  'data-real-system'?: string;
};

type RealSystemComponentProps<T extends As = any, P = StyledDict> = PropsOf<T> &
  CustomProps<P> &
  React.PropsWithChildren<P> &
  StylishProps;

/**
 * @todo Do we need this? Or just RealSystemComponentProps?
 */
type StyledComponentProps<P = StyledDict> = React.PropsWithChildren<P> &
  CustomProps<P> &
  StyledSystemProps;

type RealSystemComponent<T extends As, P = StyledDict> = ComponentWithAs<
  T,
  StyledComponentProps<P>
>;

type FunctionCSSInterpolation<P = StyledDict> = {
  (props: P): CSSObject;
};

// type PseudoProps = {
//   [K in keyof Pseudos]?: CSSObject;
// };

type StyleObjectOrFn<P = StyledDict> = CSSObject | FunctionCSSInterpolation<P>;

type StyledSystemProps = StyleProps & PseudoProps;

export type {
  CSSObject,
  InternalRealSystemComponentProps,
  RealSystemComponent,
  RealSystemComponentProps,
  StyleObjectOrFn,
};
