import { useTheme as emotionUseTheme } from '@emotion/react';

import type { ThemeShape } from './makeTheme';

type UseTheme = () => ThemeShape;
const useTheme = emotionUseTheme as UseTheme;

export { useTheme };
