import { useTheme } from '../../themes/useTheme';
import type {
  ExtendedThemeTokens,
  ThemeScales,
  ThemeTokens,
  WildCardThemeToken,
} from '../types';

import { getToken, getTokens } from './getToken';

const useToken = <T extends WildCardThemeToken = ThemeTokens, O = any>(
  token: ExtendedThemeTokens<T>,
  scale: ThemeScales = 'colors',
  fallback?: O
): O => {
  const theme = useTheme();
  return getToken<T, O>(token, scale, fallback)({ theme });
};

const useTokens = <T extends WildCardThemeToken = ThemeTokens, O = any>(
  tokenMap: Partial<Record<ThemeScales, ExtendedThemeTokens<T>>>,
  fallback?: O
): O[] => {
  const theme = useTheme();
  return getTokens<T, O>(tokenMap, fallback)({ theme });
};

export { useToken, useTokens };
