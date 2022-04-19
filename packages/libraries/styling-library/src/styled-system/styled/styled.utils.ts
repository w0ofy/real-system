import emotionValid from '@emotion/is-prop-valid';
import memoize from '@emotion/memoize';

import { STYLISH_PROPS_MAP } from '../styleProps/index';

const dataAttr = 'data-';
const ariaAttr = 'aria-';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { width, height, ...restStyleProps } = STYLISH_PROPS_MAP;

const PROPS_TO_BLOCK = {
  as: true,
  sx: true,
  ...restStyleProps,
};

const isPropValid = (prop: string) =>
  emotionValid(prop) || prop.includes(dataAttr) || prop.includes(ariaAttr);

export const makeShouldForwardProp = <T = boolean>(strict?: T) => {
  if (strict) return memoize((prop: string) => isPropValid(prop));
  return memoize((prop: string) => !PROPS_TO_BLOCK[prop]);
};

type CreateShouldForwardProp = ReturnType<typeof makeShouldForwardProp>;

/**
 * Function with attached methods for selecting certain kinds of props that should or should not be forwarded to a component's DOM Element.
 * @default ifNotStyleProp Forward all props except style props
 */
interface ShouldForwardProp extends CreateShouldForwardProp {
  /** Forward all props except style props */
  ifNotStyleProp: typeof ifNotStyleProp;
  /** Only forward html-valid props, as defined in `@emotion/is-prop-valid`. `data-*` and `aria-*` are also forwarded. */
  ifValidHTMLProp: typeof ifValidHTMLProp;
}

const shouldForwardProp = makeShouldForwardProp() as ShouldForwardProp;
const ifValidHTMLProp = makeShouldForwardProp<true>(true);
const ifNotStyleProp = makeShouldForwardProp();

shouldForwardProp.ifNotStyleProp = ifNotStyleProp;
shouldForwardProp.ifValidHTMLProp = ifValidHTMLProp;

export type { ShouldForwardProp };
export { shouldForwardProp };
