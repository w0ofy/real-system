/**
 * @todo create useTokens to for getting multiple tokens
 */

import { getToken } from '../utils/getToken';
import { ThemeScales, ThemeTokens } from '../utils/types';

import { useTheme } from './useTheme';

const useToken = (
  token: ThemeTokens,
  scale: ThemeScales = 'colors',
  fallback?: any
): any => {
  const theme = useTheme();
  return getToken<any>(token, scale, fallback)({ theme });
};

export { useToken };
