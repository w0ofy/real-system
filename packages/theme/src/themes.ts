import { DefaultTheme } from '@real-system/styling';

import { darkBrandPalette } from './palettes';
import realsystem from './tokens';

const themes = {
  realsystem,
  darkBrand: (): DefaultTheme => realsystem(darkBrandPalette),
};

export { themes };
