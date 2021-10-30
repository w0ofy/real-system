import { DefaultTheme } from '@realsystem/styling';

import { darkBrandPalette } from './palettes';
import realsystem from './tokens';

const themes = {
  realsystem,
  darkBrand: (): DefaultTheme => realsystem(darkBrandPalette),
};

export { themes };
