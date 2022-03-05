import { useTheme } from '../../themes/useTheme';
import { ThemeScales, ThemeTokens } from '../factory';

import { getToken } from './getToken';

/**
 * @todo create useTokens to for getting multiple tokens
 */
const useToken = (
  token: ThemeTokens,
  scale: ThemeScales = 'colors',
  fallback?: any
): any => {
  const theme = useTheme();
  return getToken<any>(token, scale, fallback)({ theme });
};

export { useToken };
