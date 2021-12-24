/**
 * @todo create useTokens to for getting multiple tokens
 */

import { getToken } from '../utils/getToken';
import { ThemeScales, ThemeTokens } from '../utils/types';

import { useTheme } from './useTheme';

const useToken = (
  token: ThemeTokens,
  scale: ThemeScales = 'colors',
  fallback?: string | number
): string | number => {
  const theme = useTheme();
  return getToken<string | number>(token, scale, fallback)({ theme });
};

export { useToken };
