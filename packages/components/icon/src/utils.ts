import { kebabCase } from '@real-system/utils';

import { HeroIconNames, HeroIconSet, Icons, IconValue } from './types';

const formatIconName = (heroIconName: HeroIconNames): Icons =>
  kebabCase<typeof heroIconName>(heroIconName).split('-icon').shift() as Icons;

type IconsMap = { [key in Icons]: IconValue };

const getIcons = (IconSet: HeroIconSet): IconsMap => {
  const heroIcons = Object.keys(IconSet) as HeroIconNames[];
  const icons = heroIcons.reduce((o, heroIconName) => {
    const key = formatIconName(heroIconName);
    return { ...o, [key]: IconSet[heroIconName] };
  }, {} as IconsMap);

  return icons as IconsMap;
};

export { getIcons };
