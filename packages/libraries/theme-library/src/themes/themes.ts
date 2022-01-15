import { palettes } from '../palettes/config';

import { tokenizePalette } from './tokenizePalette';

const themes = {
  /** default theme */
  realsystem: tokenizePalette(),
  stripe: tokenizePalette(palettes.stripe),
};

export { themes };
