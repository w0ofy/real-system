import * as OutlineIcons from '@heroicons/react/outline';
import * as SolidIcons from '@heroicons/react/solid';

import { kebabCase } from '@real-system/utils';

import { IconKeys, Icons, IconValues } from './types';

type IconKinds = 'SOLID' | 'OUTLINE';

const ICON_KINDS: Record<IconKinds, typeof SolidIcons | typeof OutlineIcons> = {
  SOLID: SolidIcons,
  OUTLINE: OutlineIcons,
};

type IconsMap = { [key in Icons]: IconValues };

const getIcons = (kind: 'OUTLINE' | 'SOLID'): IconsMap => {
  const IconSet = ICON_KINDS[kind];
  const heroIcons = Object.keys(IconSet) as IconKeys[];
  const icons = heroIcons.reduce((o, rawKey) => {
    const key = kebabCase<typeof rawKey>(rawKey);
    return { ...o, [key]: IconSet[rawKey] };
  }, {} as IconsMap);

  return icons as IconsMap;
};

const OUTLINE_ICONS = getIcons('OUTLINE');
const SOLID_ICONS = getIcons('SOLID');

type IconNamesMap = { [key in Icons]: Icons };

const ICON_NAMES = Object.keys(OUTLINE_ICONS).reduce(
  (o, key) => ({ ...o, [key]: key }),
  {} as IconNamesMap
);

export { ICON_NAMES, OUTLINE_ICONS, SOLID_ICONS };
