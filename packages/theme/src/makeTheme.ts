import { DefaultTheme } from '@real-system/styling';

import defaultTheme, { palette } from './tokens';

const makeTheme = (theme = defaultTheme): DefaultTheme => theme(palette);

export { makeTheme };
