/**
 * Customized styled-system css fn
 * @see https://raw.githubusercontent.com/styled-system/styled-system/master/packages/css/src/index.js
 */

import {
  aliases,
  cssGet,
  multiples,
  responsive,
  scales,
  transforms,
} from './css.utils';

const defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};

/**
 * A recursive styleFn for mapping real system style-props
 * to their respective CSS properties and theme scale values.
 */
const css = (args) => (props) => {
  const theme = { ...defaultTheme, ...(props.theme || props) };
  let result = {};
  const obj = typeof args === 'function' ? args(theme) : args;
  const styles = responsive(obj)(theme);

  for (const key in styles) {
    const x = styles[key];
    const val = typeof x === 'function' ? x(theme) : x;

    if (key === 'variant') {
      const variant = css(cssGet(theme, val))(theme);
      result = { ...result, ...variant };
      continue;
    }

    if (val && typeof val === 'object') {
      result[key] = css(val)(theme);
      continue;
    }

    /** some ordered operations */
    // get the css property
    const prop = cssGet(aliases, key, key);
    // get the scale name
    const scaleName = cssGet(scales, prop);
    // get the scale obj or return as empty obj
    const scale = cssGet(theme, scaleName, cssGet(theme, prop, {}));
    // make sure value is integer or pos/neg string
    const transform = cssGet(transforms, prop, cssGet);
    // get the value from the scale or return the value
    const value = transform(scale, val, val);

    // if the style prop has multiple css properties, assign the value to each one of them
    if (multiples[prop]) {
      const dirs = multiples[prop];

      for (let i = 0; i < dirs.length; i++) {
        result[dirs[i]] = value;
      }
    } else {
      result[prop] = value;
    }
  }

  return result;
};

export { css };
