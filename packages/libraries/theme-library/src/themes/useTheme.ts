import { primitiveUseTheme } from '@real-system/styling-library';

import type { ThemeShape } from './makeTheme';

type UseTheme = () => ThemeShape;
const useTheme = primitiveUseTheme as UseTheme;

export { useTheme };
