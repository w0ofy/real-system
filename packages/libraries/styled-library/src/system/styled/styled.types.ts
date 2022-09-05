import type { Dict } from '@real-system/utils-library';

import type { StylishProps } from '../props';

import {
  As,
  ComponentWithAs,
  CSSWithMultiValues,
  PropsOf,
  RealSystemChildrenProp,
  RecursiveCSSObject,
  StyledPropsWithChildren,
} from './styled.types.helpers';

/**
 * type helper for `styled`'s `toCSSObject` function
 */
type CSSObject = RecursiveCSSObject<CSSWithMultiValues>;

type StaticProps = {
  /** `data-testid` DOM attribute for component. Useful when using @testing-library or other testing tools */
  'data-testid'?: string;
  /** Pass a custom class name. Also useful for when wrapping components with styled or need to use classic css or stylesheets. */
  className?: string;
};

type RealSystemElementProps<T extends As = any> =
  T extends keyof JSX.IntrinsicElements
    ? PropsOf<T> & StaticProps & RealSystemChildrenProp
    : StaticProps & RealSystemChildrenProp;

type RealSystemCustomProps<P = Dict> = {
  /**
   * Lowest-priority styles. Use to set baseline styles. Also useful for media queries
   */
  __css?: StyleObjectOrFn<P>;
  /**
   * Highest-priority styles. Use `sx` to override styles
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

type RealSystemComponentProps<T extends As = any, P = Dict> = PropsOf<T> &
  RealSystemCustomProps<P> &
  StyledPropsWithChildren<P> &
  StylishProps;

/**
 * @todo Do we need this? Or just RealSystemComponentProps?
 */
type StyledComponentProps<P = Dict> = StyledPropsWithChildren<P> &
  RealSystemCustomProps<P> &
  StylishProps;

type RealSystemComponent<T extends As, P = Dict> = ComponentWithAs<
  T,
  StyledComponentProps<P>
>;

type FunctionCSSInterpolation<P = Dict> = {
  (props: P): CSSObject;
};

type StyleObjectOrFn<P = Dict> = CSSObject | FunctionCSSInterpolation<P>;

export type {
  CSSObject,
  InternalRealSystemComponentProps,
  RealSystemComponent,
  RealSystemComponentProps,
  RealSystemCustomProps,
  RealSystemElementProps,
  StyledComponentProps,
  StyleObjectOrFn,
};
