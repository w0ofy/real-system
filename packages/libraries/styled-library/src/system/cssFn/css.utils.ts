import { styleProps } from '../config';

const cssGet = (obj, key, fallback?: any) => {
  key = key && key.split ? key.split('.') : [key];
  for (let p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undefined;
  }
  return obj === undefined ? fallback : obj;
};

const defaultBreakpoints = [40, 52, 64].map((n) => n + 'em');

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
  console.log(prop);
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
 * with the CSS properties thast should be transformable to negative values i.e. `marginLeft={-50}`
 * */
const transforms = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'm',
  'mx',
  'my',
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
  const breakpoints = cssGet(theme, 'breakpoints', defaultBreakpoints);
  const mediaQueries = [
    null,
    ...breakpoints.map((n) => `@media screen and (min-width: ${n})`),
  ];

  for (const key in styles) {
    const value =
      typeof styles[key] === 'function' ? styles[key](theme) : styles[key];

    if (value == null) continue;
    if (!Array.isArray(value)) {
      next[key] = value;
      continue;
    }
    for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      const media = mediaQueries[i];
      if (!media) {
        next[key] = value[i];
        continue;
      }
      next[media] = next[media] || {};
      if (value[i] == null) continue;
      next[media][key] = value[i];
    }
  }

  return next;
};

export { aliases, cssGet, multiples, responsive, scales, transforms };
