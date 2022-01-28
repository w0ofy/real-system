import { _get } from '@real-system/utils-library';

import type { ThemeScales, ThemeTokens } from './types';

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

export { getToken };
