import * as React from 'react';
import * as CSS from 'csstype';

import type { ResponsiveValue } from '../config/_types';
import type { PseudoPropNames, StyleProps } from '../styleProps/index';

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

type CSSProperties = CSS.Properties & Omit<StyleProps, keyof CSS.Properties>;

type ThemeThunk<T> = T | ((theme: StyledDict) => T);

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
  SourceProps extends StyledDict = StyledDict,
  OverrideProps extends StyledDict = StyledDict
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

type MergeWithAs<
  ComponentProps extends StyledDict,
  AsProps extends StyledDict,
  AdditionalProps extends StyledDict = StyledDict,
  AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

type ComponentWithAs<
  Component extends As,
  Props extends StyledDict = StyledDict
> = {
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

type StyledDict<T = any> = Record<PropertyKey, T>;

type StyledObjUnion<T> = T & { [key: PropertyKey]: any };

export type {
  As,
  ComponentWithAs,
  CSSWithMultiValues,
  PropsOf,
  RecursiveCSSObject,
  RecursiveCSSSelector,
  RecursivePseudo,
  StyledDict,
  StyledObjUnion,
};
