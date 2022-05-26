/**
 * Customized styled-system css fn
 * @see https://raw.githubusercontent.com/styled-system/styled-system/master/packages/css/src/index.js
 */

import type { Dict, Obj } from '@real-system/utils-library';

import type { ThemeScales } from '../../theme/tokens/types';
import { pseudoProps } from '../props/pseudoProps';

import {
  aliases,
  cssGet,
  multiples,
  responsive,
  scales,
  transforms,
} from './css.utils';

const defaultTheme: Partial<Record<ThemeScales, (number | string)[] | Obj>> = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};

/**
 * A recursive styleFn for mapping real system stylish-props
 * to their respective CSS properties and theme scale values.
 *
 * @todo type check args
 */
const css = (args) => (props: Dict) => {
  const theme = {
    ...defaultTheme,
    ...(props?.theme || props || {}),
  };
  const result = {};
  let styles = typeof args === 'function' ? args(theme) : args;
  styles = responsive(styles)(theme);

  for (let key in styles) {
    const x = styles[key];
    const val = typeof x === 'function' ? x(theme) : x;
    // if pseudo prop, rename key to appropriate pseudo selector
    if (key in pseudoProps) {
      key = pseudoProps[key];
    }

    // if nested css, recursively run css on the value
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
    const transformOrGet = cssGet(transforms, prop, cssGet);
    // get the value from the scale or return the value
    const value = transformOrGet(scale, val, val);

    // if the style prop has multiple css properties, assign the value to each one of them
    if (multiples[prop]) {
      multiples[prop].forEach((cssProperty) => (result[cssProperty] = value));
    } else {
      // else just assign the css property its value
      result[prop] = value;
    }
  }

  return result;
};

export { css };
