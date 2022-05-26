import {
  isObject,
  isUndefinedOrNull,
  runIfFn,
} from '@real-system/utils-library';

import { styleProps } from '../config';

const cssGet = (obj, key, fallback?: any) => {
  key = key && key.split ? key.split('.') : [key];
  for (let p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undefined;
  }
  return obj === undefined ? fallback : obj;
};

const defaultBreakpoints = ['30em', '48em', '62em', '80em', '96em'];

const PROPS = Object.keys(styleProps);

/**
 * Style props that are aliases for a CSS property
 */
const aliases = PROPS.reduce((props, prop) => {
  // if .property exists, it's an alias for a CSS property
  if (styleProps[prop]?.property) {
    return {
      ...props,
      [prop]: styleProps[prop]?.property,
    };
  }
  // if property is true, it's definitely a CSS property
  if (styleProps[prop] === true) {
    return {
      ...props,
      prop,
    };
  }
  // else, just return the accumulator
  return {
    ...props,
  };
}, {});

/**
 * Style props that map to multiple CSS properties
 */
const multiples = PROPS.reduce((obj, p) => {
  if (styleProps[p]?.properties) {
    return {
      ...obj,
      [p]: styleProps[p]?.properties,
    };
  }
  return { ...obj };
}, {});

const scales = PROPS.reduce((obj, prop) => {
  if (styleProps[prop]?.scale) {
    return {
      ...obj,
      [prop]: styleProps[prop]?.scale,
    };
  }
  return {
    ...obj,
  };
}, {});

const positiveOrNegative = (scale, value) => {
  if (typeof value !== 'number' || value >= 0) {
    return cssGet(scale, value, value);
  }
  const absolute = Math.abs(value);
  const n = cssGet(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

/** A map like `{ [styleProp]: transformFn }`
 * with the CSS properties thast should be transformable to negative/destructive token values i.e. `marginLeft={-50}`
 * */
const transforms = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'top',
  'bottom',
  'left',
  'right',
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: positiveOrNegative,
  }),
  {}
);

const responsive = (styles) => (theme) => {
  const next = {};
  let breakpoints = cssGet(theme, 'breakpoints', defaultBreakpoints);
  if (isObject(breakpoints)) {
    breakpoints = Object.values(breakpoints);
  }
  const mediaQueries = [
    // `null` allows the first value to be the default top-level css (outside of a media query). could use max-width, but... no need
    null,
    // the rest a min-widths
    ...breakpoints.map((n) => `@media screen and (min-width: ${n})`),
  ];

  for (const key in styles) {
    const value = runIfFn(styles[key], theme);

    // if value is 'undefined' or 'null', continue
    if (isUndefinedOrNull(value)) continue;

    if (!Array.isArray(value)) {
      next[key] = value;
      continue;
    }

    // constrain the values-array to the breakpoints-array length
    const queries = value.slice(0, mediaQueries.length).length;

    for (let i = 0; i < queries; i++) {
      const media = mediaQueries?.[i];
      if (!media) {
        next[key] = value[i];
        continue;
      }
      next[media] = next[media] || {};
      if (isUndefinedOrNull(value[i])) continue;
      next[media][key] = value[i];
    }
  }

  return next;
};

export { aliases, cssGet, multiples, responsive, scales, transforms };
