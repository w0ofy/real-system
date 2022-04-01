import { palettes } from '../palettes/config';

import { makeTheme } from './makeTheme';

const themes = {
  /** default theme */
  realSystem: makeTheme(),
  stripe: makeTheme(palettes.stripe),
};

export { themes };
