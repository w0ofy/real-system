import * as OIcons from '@heroicons/react/outline';
import * as SIcons from '@heroicons/react/solid';

import type { Icons } from './types';
import { getIcons } from './utils';

const SolidIcons = getIcons(SIcons);
const OutlineIcons = getIcons(OIcons);
const ICONS_LIST = Object.keys(OutlineIcons) as Icons[];

type IconsMap = Record<Icons, Icons>;

const ICONS_MAP = ICONS_LIST.reduce(
  (o, key) => ({ ...o, [key]: key }),
  {} as IconsMap
);

export { ICONS_LIST, ICONS_MAP, OutlineIcons, SolidIcons };
