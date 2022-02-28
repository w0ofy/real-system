import { primitiveUseTheme } from '@real-system/styling-library';

import type { ThemeShape } from './tokenizePalette';

type UseTheme = () => ThemeShape;
const useTheme = primitiveUseTheme as UseTheme;

export { useTheme };
