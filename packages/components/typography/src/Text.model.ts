import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';

type CommonTextProps = Omit<RealElementPrimitiveProps, 'as' | 'size'>;

type TextAsTags = Extract<
  keyof JSX.IntrinsicElements,
  'p' | 'span' | 'div' | 'label'
>;

type HeadingAsTags =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'label'
  | 'span'
  | 'header';

type TypographyTags = TextAsTags | HeadingAsTags;

type InvalidConfig = {
  /**
   * @todo
   */
  status: boolean;
  /**
   * @todo
   */
  message?: React.ReactNode;
  /**
   * @todo
   * Hides the "invalid icon"
   */
  hideIcon?: boolean;
};

export type { CommonTextProps, InvalidConfig, TextAsTags, TypographyTags };
