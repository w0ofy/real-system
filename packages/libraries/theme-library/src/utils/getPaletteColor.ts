import { _get } from '@real-system/utils-library';

import { Palette, PaletteKeys } from '../palettes/types';

const getPaletteColor = (palette: Palette, key: PaletteKeys): string =>
  _get.oneOf<Palette, string>(
    palette,
    [key, `status.${key}`, `accent.${key}`],
    ''
  );

export { getPaletteColor };
