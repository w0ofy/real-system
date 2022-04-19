import { css } from '@emotion/react';
import _styled, { FunctionInterpolation } from '@emotion/styled';

import {
  getPseudoProps,
  getStyleProps,
  isNotStylishProp,
} from '../styleProps/index';

import type {
  CSSObject,
  RealSystemComponent,
  StyleObjectOrFn,
} from './styled.types';
import type { As, StyledDict } from './styled.types.helpers';
import { objectFilter, shouldForwardProp } from './styled.utils';

type StyleResolverProps = CSSObject & {
  sx?: StyleObjectOrFn;
  theme: any;
};

type GetStyleObject = FunctionInterpolation<StyleResolverProps>;

/**
 * Style resolver function that manages how style props are merged
 * in combination with other possible ways of defining styles.
 *
 * For example, take a component defined this way:
 * ```jsx
 * <Box fontSize="24px" sx={{ fontSize: "40px" }}></Box>
 * ```
 *
 * We want to manage the priority of the styles properly to prevent unwanted
 * behaviors. Right now, the `sx` prop has the highest priority so the resolved
 * fontSize will be `40px`
 */
type ToCSSObject = (styles: StyleObjectOrFn) => GetStyleObject;

const toCSSObject: ToCSSObject = (styles) => (props) => {
  const { sx = {}, ...rest } = props;
  const styleProps = getStyleProps({ ...styles, ...rest, ...sx });
  const pseudoProps = getPseudoProps({ ...styles, ...rest, ...sx });
  const styledStyles = objectFilter({ ...styles }, (prop) =>
    isNotStylishProp(prop)
  );

  console.log(styledStyles);
  return { ...styledStyles, ...styleProps, ...pseudoProps };
};

type RealSystemStyledOptions = {
  label?: string;
  shouldForwardProp?(propName: PropertyKey): boolean;
  target?: string;
};

function styled<T extends As>(component: T, options?: RealSystemStyledOptions) {
  return function styledComponent<P extends StyledDict = StyledDict>(
    /** @todo allow passing of multiple args */
    styles: StyleObjectOrFn<P>
  ) {
    const { ...styledOptions } = options ?? {};

    if (!styledOptions.shouldForwardProp) {
      styledOptions.shouldForwardProp = shouldForwardProp.ifNotStyleProp;
    }

    return _styled(
      component as React.ComponentType<any>,
      styledOptions
    )(toCSSObject(styles)) as RealSystemComponent<T, P>;
  };
}

export type { RealSystemStyledOptions };
export { styled };
