import { create, themes } from '@storybook/theming/create';
import { addons } from '@storybook/addons';
import pkg from '../package.json';

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
    barSelectedColor: 'rgb(99,91,255)',
    colorPrimary: 'rgb(18, 28, 45)',
    colorSecondary: 'rgb(99,91,255)',
    brandTitle: `Real System v${pkg.version}`,
    brandUrl: 'https://github.com/bigwoof91/realsystem',
    gridCellSize: 12,
  }),
};

addons.setConfig(managerConfig);
