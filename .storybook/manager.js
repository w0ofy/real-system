import { create, themes } from '@storybook/theming/create';
import { addons } from '@storybook/addons';
import corePkgJson from '../packages/core/package.json';
import { palettes } from '../packages/libraries/theme-library/src/index';

export const managerConfig = {
  showAddonsPanel: true,
  showPanel: true,
  showSearchBox: false,
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/,
  enableShortcuts: true,
  sidebar: {
    // collapsedRoots: [],
  },
  theme: create({
    ...themes.light,
    barSelectedColor: palettes.default.primary,
    colorPrimary: palettes.default.neutral,
    colorSecondary: palettes.default.primary,
    brandTitle: `Real System v${corePkgJson.version}`,
    brandUrl: 'https://github.com/bigwoof91/real-system',
    gridCellSize: 12,
  }),
};

addons.setConfig(managerConfig);
