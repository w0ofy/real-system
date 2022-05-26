import _styled, { FunctionInterpolation } from '@emotion/styled';

import type { Dict } from '@real-system/utils-library';
import { runIfFn } from '@real-system/utils-library';

import { ThemeShape } from '../../theme';
import { css } from '../cssFn';
import { isStylishProp } from '../props';

import type {
  CSSObject,
  RealSystemComponent,
  StyleObjectOrFn,
} from './styled.types';
import type { As } from './styled.types.helpers';
import {
  filterUndefined,
  objectFilter,
  shouldForwardProp,
} from './styled.utils';

type StyleResolverProps = CSSObject & {
  __css?: StyleObjectOrFn;
  sx?: StyleObjectOrFn;
  theme: ThemeShape;
};

type GetCSSObject = FunctionInterpolation<StyleResolverProps>;
type ToCSSObject = (
  styles: StyleObjectOrFn,
  baseStyles?: StyleObjectOrFn
) => GetCSSObject;

/**
 * Style resolver function that manages how style props are merged
 * in combination with other possible ways of defining styles.
 *
 * For example:
 * ```jsx
 * <Box fontSize="24px" sx={{ fontSize: "40px" }}></Box>
 * ```
 *
 * We want to manage the priority of the styles properly to prevent unwanted
 * behaviors. Right now, the `sx` prop has the highest priority so the resolved
 * fontSize will be `40px`
 */
const toCSSObject: ToCSSObject =
  (styledStyles = {}, baseStyles = {}) =>
  (props) => {
    const { sx = {}, __css = {}, ...rest } = props;

    const finalBaseStyles = runIfFn(baseStyles, props);
    const finalStyledStyles = runIfFn(styledStyles, props);
    const finalStyleProps = objectFilter(rest, isStylishProp);

    const finalStyles = {
      ...__css,
      ...finalBaseStyles,
      ...finalStyledStyles,
      ...filterUndefined(finalStyleProps),
      ...sx,
    };

    return css(finalStyles)(props);
  };

type RealSystemStyledOptions = {
  label?: string;
  /** Utility only forwarding specific props to the DOM element itself. By default will forward all props except `StylishProps` */
  shouldForwardProp?(propName: string): boolean;
  /** The elements base styles. Useful for reusing a `CreateStyledComponent` instead of reusing the `Component` itself */
  baseStyles?: StyleObjectOrFn;
  target?: string;
};

function styled<T extends As>(component: T, options?: RealSystemStyledOptions) {
  return function createStyledComponent<P extends Dict = Dict>(
    /** @todo allow passing of multiple args/string literal */
    styles: StyleObjectOrFn<P> = {}
  ) {
    const { baseStyles, ...styledOptions } = options ?? {};

    if (!styledOptions.shouldForwardProp) {
      styledOptions.shouldForwardProp = shouldForwardProp.ifNotStylishProp;
    }

    return _styled(
      component as React.ComponentType<any>,
      styledOptions
    )(toCSSObject(styles, baseStyles)) as RealSystemComponent<T, P>;
  };
}

export type { RealSystemStyledOptions };
export { styled };
