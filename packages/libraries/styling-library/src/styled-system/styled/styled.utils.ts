import emotionValid from '@emotion/is-prop-valid';
import memoize from '@emotion/memoize';

import { STYLISH_PROPS_MAP } from '../styleProps/index';

const dataAttr = 'data-';
const ariaAttr = 'aria-';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { width, height, ...PROPS_TO_BLOCK } = STYLISH_PROPS_MAP;

const isPropValid = (prop: string) =>
  emotionValid(prop) ||
  prop.includes(dataAttr) ||
  prop.includes(ariaAttr) ||
  prop === 'as';

export const createShouldForwardProp = (strict?: boolean) => {
  if (strict) {
    return memoize(
      (prop: string) => isPropValid(prop) && !PROPS_TO_BLOCK[prop]
    );
  }
  return memoize((prop: string) => !PROPS_TO_BLOCK[prop]);
};

const shouldForwardProp = (strict = false) => createShouldForwardProp(strict);

export { shouldForwardProp };
