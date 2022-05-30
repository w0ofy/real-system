import * as React from 'react';
import * as CSS from 'csstype';

import type { Dict } from '@real-system/utils-library';

import type { ResponsiveValue } from '../config/_types';
import type { PseudoPropNames, StyleProps } from '../props';
/**
 * CSSObject helpers
 */
type PseudoKeys = keyof CSS.Pseudos | PseudoPropNames;
type RecursivePseudo<D> = {
  [K in PseudoKeys]?: (D | RecursivePseudo<D>) & D;
};
type RecursiveCSSSelector<D> = {
  [selector: string]: (D | string | RecursiveCSSSelector<D | string>) & D;
};

type CSSPropertiesWithoutColor = Omit<CSS.Properties, 'color'>;

type CSSProperties = CSSPropertiesWithoutColor &
  Omit<StyleProps, keyof CSSPropertiesWithoutColor>;

type ThemeThunk<T> = T | ((theme: Dict) => T);

type PropertyValue<K extends keyof CSSProperties> = ThemeThunk<
  ResponsiveValue<boolean | number | string | CSSProperties[K]>
>;

type CSSWithMultiValues = {
  [K in keyof CSSProperties]?: K extends keyof StyleProps
    ? StyleProps[K] | PropertyValue<K>
    : PropertyValue<K>;
};

type RecursiveCSSObject<D> = D &
  (D | RecursivePseudo<D> | RecursiveCSSSelector<D>);

/**
 * Extract the props of a React element or component
 */
type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T>;
type As<El = any> = React.ElementType<El>;

type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, 'transition' | 'as' | 'color' | OmitAdditionalProps>;

type RightJoinProps<
  SourceProps extends Dict = Dict,
  OverrideProps extends Dict = Dict
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

type MergeWithAs<
  ComponentProps extends Dict,
  AsProps extends Dict,
  AdditionalProps extends Dict = Dict,
  AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

type ComponentWithAs<Component extends As, Props extends Dict = Dict> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;

  displayName?: string;
  propTypes?: React.WeakValidationMap<any>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

type RenderProp<P = Dict> = (props: P) => React.ReactNode;

type StyledChildren<T = any> =
  | React.ReactNode
  | RenderProp<React.HTMLAttributes<T> & React.RefAttributes<T>>;

type RealSystemChildren = StyledChildren | undefined;
type RealSystemChildrenProp = { children?: RealSystemChildren };

type StyledPropsWithChildren<P> = P & RealSystemChildrenProp;

export type {
  As,
  ComponentWithAs,
  CSSWithMultiValues,
  Dict,
  PropsOf,
  RealSystemChildrenProp,
  RecursiveCSSObject,
  RecursiveCSSSelector,
  RecursivePseudo,
  StyledPropsWithChildren,
};
