import { Property } from 'csstype';

import { polished } from '@realsystem/styling';

import palette from './default/palette';

const { tint, shade, invert, complement } = polished;

const makeColorRange =
  (prefix: string) =>
  (
    givenColor: keyof typeof palette | Property.Color,
    givenRoot?: string
  ): Record<string, string> => {
    const isPaletteColor = !!palette[givenColor];
    const color = palette[givenColor] || givenColor;
    const root = givenRoot ? givenRoot : isPaletteColor ? color : 'NO_ROOT';
    return {
      [`${prefix}-${root}`]: color,
      [`${prefix}-${root}-highlight`]: invert(color),
      [`${prefix}-${root}-complement`]: complement(color),
      [`${prefix}-${root}-muted`]: tint(0.3, color),
      [`${prefix}-${root}-weak`]: tint(0.4, color),
      [`${prefix}-${root}-weaker`]: tint(0.6, color),
      [`${prefix}-${root}-weakest`]: tint(0.9, color),
      [`${prefix}-${root}-strong`]: shade(0.3, color),
      [`${prefix}-${root}-stronger`]: shade(0.6, color),
      [`${prefix}-${root}-strongest`]: shade(0.9, color),
    };
  };

export { makeColorRange };
