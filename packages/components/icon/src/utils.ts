import { kebabCase } from '@real-system/utils';

import { HeroIconKeys, HeroIconValues, Icons, RawIcons } from './types';

type IconsMap = { [key in Icons]: HeroIconValues };

const getIcons = (IconSet): IconsMap => {
  const heroIcons = Object.keys(IconSet) as HeroIconKeys[];
  const icons = heroIcons.reduce((o, rawKey) => {
    const key = formatIconName(kebabCase<typeof rawKey>(rawKey));
    return { ...o, [key]: IconSet[rawKey] };
  }, {} as IconsMap);

  return icons as IconsMap;
};

const formatIconName = (icon: RawIcons): Icons =>
  icon.split('-icon').shift() as Icons;

export { getIcons };
