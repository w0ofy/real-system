import { useTheme } from '../../themes/useTheme';
import { ThemeScales, ThemeTokens } from '../factory';

import { getToken, getTokens } from './getToken';

const useToken = <T extends ThemeTokens = ThemeTokens>(
  token: T,
  scale: ThemeScales = 'colors',
  fallback?: any
): any => {
  const theme = useTheme();
  return getToken<any>(token, scale, fallback)({ theme });
};

const useTokens = <T extends ThemeTokens[] = ThemeTokens[]>(
  tokensMap: Parameters<typeof getTokens>[0],
  fallback?: T
): any => {
  const theme = useTheme();
  return getTokens<any>(tokensMap, fallback)({ theme });
};

export { useToken, useTokens };
