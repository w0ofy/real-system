type ThemeIntents =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'neutral';

type ThemeStatuses = Extract<
  ThemeIntents,
  'success' | 'warning' | 'danger' | 'info' | 'disabled'
>;
type ThemeSizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type { ThemeIntents, ThemeSizes, ThemeStatuses };
