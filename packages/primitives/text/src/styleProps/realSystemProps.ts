import { Property } from 'csstype';

import { system } from '@real-system/styling';

const realSystemProps = system({
  cursor: true,
  outline: true,
  transition: true,
  textDecoration: true,
  textTransform: true,
  whiteSpace: true,
  wordBreak: true,
  wordWrap: true,
  textOverflow: true,
  overflowWrap: true,
});

type RealSystemProps = {
  cursor?: Property.Cursor;
  outline?: Property.Outline;
  overflowWrap?: Property.OverflowWrap;
  transition?: Property.Transition;
  textDecoration?: Property.TextDecoration;
  textOverflow?: Property.TextOverflow;
  textTransform?: Property.TextTransform;
  whiteSpace?: Property.WhiteSpace;
  wordBreak?: Property.WordBreak;
  wordWrap?: Property.WordWrap;
};

export { realSystemProps };
export type { RealSystemProps };
