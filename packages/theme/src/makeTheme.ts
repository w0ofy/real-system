import { DefaultTheme } from '@realsystem/styling';

import defaultTheme, { palette } from './tokens/default';

const makeTheme = (theme = defaultTheme): DefaultTheme => theme(palette);

export { makeTheme };
