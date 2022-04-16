import emotionValid from '@emotion/is-prop-valid';
import memoize from '@emotion/memoize';

import { STYLISH_PROPS } from '../styleProps/index';

const dataAttr = 'data-';
const ariaAttr = 'aria-';

const isPropValid = (prop: string) =>
  emotionValid(prop) || prop.includes(dataAttr) || prop.includes(ariaAttr);

export const createShouldForwardProp = (strict?: boolean) => {
  const regex = new RegExp(`^(${STYLISH_PROPS.join('|')})$`);
  // eslint-disable-next-line prettier/prettier

  if (strict) {
    return memoize((prop: string) => isPropValid(prop) && !regex.test(prop));
  }
  return memoize((prop: string) => !regex.test(prop));
};

const shouldForwardProp = (strict = false) => createShouldForwardProp(strict);

export { shouldForwardProp };
