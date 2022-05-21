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
    return _get(props.theme, `${scale}.${token}`, fallback);
  };
};

/**
 * A styleFn to get many theme tokens
 */
const getTokens = <T extends WildCardThemeToken = ThemeTokens, O = any>(
  tokenMap: Partial<Record<ThemeScales, ExtendedThemeTokens<T>>>,
  fallback?: O
) => {
  return function <P extends O = O>(props): P[] {
    const values = [] as unknown as P[];

    for (const scale in tokenMap) {
      values.push(_get(props?.theme, `${scale}.${tokenMap[scale]}`, fallback));
    }
    return values;
  };
};

export { getToken, getTokens };
