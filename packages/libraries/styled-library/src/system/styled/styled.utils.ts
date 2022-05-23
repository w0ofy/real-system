import emotionValid from '@emotion/is-prop-valid';
import memoize from '@emotion/memoize';

import type { Dict } from '@real-system/utils-library';

import { STYLISH_PROPS_MAP } from '../props';

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

const makeShouldForwardProp = <T extends boolean>(strict?: T) => {
  if (strict) return memoize((prop: string) => isPropValid(prop));
  return memoize((prop: string) => !PROPS_TO_BLOCK[prop]);
};

type CreateShouldForwardProp = ReturnType<typeof makeShouldForwardProp>;

/**
 * Function with attached methods for selecting certain kinds of props that should or should not be forwarded to a component's DOM Element.
 * @default ifNotStylishProp Forward all props except stylish props
 */
type ShouldForwardProp = CreateShouldForwardProp & {
  /** Forward all props stylish style props */
  ifNotStylishProp: typeof ifNotStylishProp;
  /** Only forward html-valid props, as defined in `@emotion/is-prop-valid`. `data-*` and `aria-*` are also forwarded. */
  ifValidHTMLProp: typeof ifValidHTMLProp;
};

const shouldForwardProp = makeShouldForwardProp() as ShouldForwardProp;
const ifValidHTMLProp = makeShouldForwardProp(true);
const ifNotStylishProp = makeShouldForwardProp();

shouldForwardProp.ifNotStylishProp = ifNotStylishProp;
shouldForwardProp.ifValidHTMLProp = ifValidHTMLProp;

type FilterFn<T> = (key: string) => boolean;

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
const objectFilter = <T extends Dict>(object: T, fn: FilterFn<T>) => {
  const result: Dict = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    const shouldPass = fn(key);
    if (shouldPass) {
      result[key] = value;
    }
  });

  return result;
};

const filterUndefined = (object: Dict) =>
  objectFilter(object, (val) => val !== null && val !== undefined);

export type { ShouldForwardProp };
export { filterUndefined, objectFilter, shouldForwardProp };
