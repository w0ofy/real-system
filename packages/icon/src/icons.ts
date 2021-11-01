import * as Feather from 'react-feather';

import { kebabCase } from '@realsystem/utils';

import { FeatherIconKeys, FeatherIconValues, Icons } from './types';

type IconsMap = { [key in Icons]: FeatherIconValues };

const ICONS = (() => {
  const featherIcons = Object.keys(Feather) as FeatherIconKeys[];
  const icons = featherIcons.reduce((o, rawKey) => {
    const key = kebabCase<typeof rawKey>(rawKey);
    return { ...o, [key]: Feather[rawKey] };
  }, {} as IconsMap);

  return icons;
})();

type IconNamesMap = { [key in Icons]: Icons };

const ICON_NAMES = Object.keys(ICONS).reduce(
  (o, key) => ({ ...o, [key]: key }),
  {} as IconNamesMap
);

export { ICON_NAMES, ICONS };
