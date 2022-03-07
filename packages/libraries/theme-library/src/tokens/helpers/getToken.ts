import { _get } from '@real-system/utils-library';

import type { ThemeScales, ThemeTokens } from '../factory';

/**
 * A styleFn to get theme tokens
 */
const getToken = <T = any>(
  token: ThemeTokens,
  scale: ThemeScales = 'colors',
  fallback?: T
) => {
  return function <P = T>(props): P {
    return _get(props.theme, `${scale}.${token}`, fallback);
  };
};

type TokensArray = any[];

const getTokens = <T extends TokensArray = TokensArray>(
  tokenMap: Partial<Record<ThemeScales, ThemeTokens>>,
  fallback?: T
) => {
  return function <P extends T = T>(props): P {
    const values = [] as unknown as P;

    for (const scale in tokenMap) {
      values.push(_get(props?.theme, `${scale}.${tokenMap[scale]}`, fallback));
    }
    return values;
  };
};

export { getToken, getTokens };
