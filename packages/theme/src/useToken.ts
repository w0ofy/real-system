import { primitiveUseTheme } from '@real-system/styling';

import {
  getToken,
  GetTokenReturnValue,
  ThemeScales,
  ThemeTokens,
} from './getToken';

/**
 *
 * @todo create `useTokens` hook for getting multiple tokens
 */
const useToken = (
  token: ThemeTokens,
  scale: ThemeScales = 'colors',
  fallback: GetTokenReturnValue = null
): GetTokenReturnValue => {
  const theme = primitiveUseTheme();
  const value = getToken(token, scale, fallback)({ theme });
  return value;
};

export { useToken };
