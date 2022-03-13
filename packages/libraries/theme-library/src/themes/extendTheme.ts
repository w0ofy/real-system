import { merge } from '@real-system/utils-library';

import { ThemeColors } from '../tokens';

import { themes } from './config';
import type { ExtendableThemeShape, ThemeShape } from './makeTheme';

type Overrides =
  | ExtendableThemeShape
  | ((colors: ThemeColors) => ExtendableThemeShape);

type ThemeNames = keyof typeof themes;
type InitialTheme = ThemeNames | ThemeShape;

const getInitialTheme = (theme: InitialTheme) => {
  let initialTheme;
  if (typeof initialTheme !== 'string') {
    return theme as ThemeShape;
  }
  return themes[theme as ThemeNames];
};

const extendTheme = (theme: InitialTheme, overrides: Overrides) => {
  const initialTheme = getInitialTheme(theme);

  if (typeof overrides === 'function') {
    return merge(initialTheme, overrides(initialTheme['colors']));
  }
  return merge(initialTheme, overrides);
};

export { extendTheme };
