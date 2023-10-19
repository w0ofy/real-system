import { _get } from '@real-system/utils-library';

import type {
  ExtendedThemeTokens,
  ThemeScales,
  ThemeTokens,
  WildCardThemeToken,
} from '../types';

/**
 * A styleFn to get a theme token
 */
const getToken = <T extends WildCardThemeToken = ThemeTokens, O = any>(
  token: ExtendedThemeTokens<T>,
  scale: ThemeScales = 'colors',
  fallback?: O
) => {
  return function <P = O>(props): P {
    return _get(props.theme, `${scale}.${token}`, fallback || token);
  };
};

/**
 * A styleFn to get many theme tokens
 */
const getTokens = <T extends WildCardThemeToken = ThemeTokens>(
  ...tokenMaps: [ThemeScales, ExtendedThemeTokens<T>][]
) => {
  return function <P = any[]>(props: any): P {
    const values = tokenMaps.map((arr) => {
      const scale = arr[0];
      const token = arr[1];
      const value = _get(props?.theme, `${scale}.${token}`, token);
      return value;
    });

    return values as P;
  };
};

export { getToken, getTokens };
