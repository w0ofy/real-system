import type { RealElementPrimitiveProps } from '@real-system/elements-primitive';

export type BaseTextProps = Omit<RealElementPrimitiveProps, 'size'>;
export type CommonTextProps = Omit<BaseTextProps, 'as'>;

export type TextAsTags = Extract<
  keyof JSX.IntrinsicElements,
  'p' | 'span' | 'div' | 'label'
>;

export type HeadingAsTags =
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
export type HeadingElement =
  | HTMLDivElement
  | HTMLHeadingElement
  | HTMLSpanElement
  | HTMLLabelElement;
