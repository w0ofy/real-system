import type { StylishProps } from '@real-system/styling-library';

type ThemeStyleFnOrConfig = StylishProps | ((...args: any[]) => StylishProps);

type ThemeConfigFnArgs<T extends Record<string, unknown>> = {
  [key: string]: any;
} & T;

export type { ThemeConfigFnArgs, ThemeStyleFnOrConfig };
