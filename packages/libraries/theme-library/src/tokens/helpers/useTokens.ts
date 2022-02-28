import { useMemo } from 'react';

import { useTheme } from '../../themes/useTheme';
import { ThemeScales, ThemeTokens } from '../factory';
import type {
  TokenizedComponentNames,
  TokenizedComponents,
} from '../factory/componentTokens';

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

/**
 *
 * @todo build options arg; return variant, part, etc.
 */
const useComponentTokens = <T extends TokenizedComponentNames>(
  component: T
): TokenizedComponents[T] => {
  const theme = useTheme();
  const componentTheme = useMemo(
    () => theme?.['components']?.[component],
    [component, theme]
  );
  return componentTheme;
};

export { useComponentTokens, useToken };
