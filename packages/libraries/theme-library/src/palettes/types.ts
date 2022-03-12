export type PaletteColorNames =
  | 'black'
  | 'white'
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink';

/**
 * @description all palette keys, regardless of depth
 */
export type PaletteKeys =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'neutral';

export type Palette<T extends string = string> = Record<PaletteColorNames, T>;

export type ThemeIntents =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'neutral';

export type ThemeStatuses = Extract<
  ThemeIntents,
  'success' | 'warning' | 'danger' | 'info' | 'disabled'
>;
export type ThemeSizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
