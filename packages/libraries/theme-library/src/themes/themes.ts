import { palettes } from '../palettes/config';

import { tokenizePalette } from './tokenizePalette';

const themes = {
  /** default theme */
  realsystem: tokenizePalette(),
  stripe: tokenizePalette(palettes.stripe),
};

console.log(themes.realsystem);

export { themes };
