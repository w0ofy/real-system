import _styled, { FunctionInterpolation } from '@emotion/styled';

import { getPseudoProps, getStyleProps } from '../styleProps/index';

import type {
  CSSObject,
  RealSystemComponent,
  StyleObjectOrFn,
} from './styled.types';
import type { As, StyledDict } from './styled.types.helpers';
import { shouldForwardProp } from './styled.utils';

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
  return { ...styleProps, ...pseudoProps };
};

type StyledOptions = {
  label?: string;
  shouldForwardProp?(propName: PropertyKey): boolean;
  target?: string;
};

function styled<T extends As>(component: T, options?: StyledOptions) {
  return function styledComponent<P extends StyledDict = StyledDict>(
    /** @todo allow passing of multiple args */
    styles: StyleObjectOrFn<P>
  ) {
    const { ...styledOptions } = options ?? {};

    /** @todo fix shouldForwardProp issue with passing of `as` prop, as well as others (e.g. see bug with Select and strict mode) 
    if (!styledOptions.shouldForwardProp) {
      styledOptions.shouldForwardProp = shouldForwardProp();
    }
    */

    return _styled(
      component as React.ComponentType<any>,
      styledOptions
    )(toCSSObject(styles)) as RealSystemComponent<T, P>;
  };
}

export type { StyledOptions };
export { styled };
