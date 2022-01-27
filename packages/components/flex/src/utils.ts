import type { ValueOf } from '@real-system/types-library';

import type {
  Basis,
  BasisOptions,
  FlexProps,
  GrowOptions,
  HorizontalAlignOptions,
  ShrinkOptions,
  VerticalAlignOptions,
  VerticalOptions,
  WrapOptions,
} from './types';

const getGrow = ({ grow }: FlexProps): number | number[] => {
  if (Array.isArray(grow)) {
    return (grow as GrowOptions[]).map((value: GrowOptions) => {
      return Number(value);
    });
  }

  if (typeof grow === 'number') {
    return grow;
  }

  if (grow) {
    return 1;
  }

  return 0;
};

const getShrink = ({ shrink, basis }: FlexProps): number | number[] => {
  if (Array.isArray(shrink)) {
    return (shrink as ShrinkOptions[]).map((value: ShrinkOptions) => {
      return Number(value);
    });
  }

  if (typeof shrink === 'number') {
    return shrink;
  }

  if (typeof shrink === 'boolean') {
    return shrink ? 1 : 0;
  }

  if (basis && basis !== 'auto') {
    return 0;
  }

  return 1;
};

const getSuffix = (item: Basis): string => {
  const suffix =
    typeof item === 'number' ||
    String(Number.parseInt(item as string, 10)) === item
      ? 'px'
      : '';
  return item + suffix;
};

const getBasis = ({ basis }: FlexProps): string | string[] => {
  if (Array.isArray(basis)) {
    return (basis as BasisOptions[]).map((value: BasisOptions) => {
      return getSuffix(value);
    });
  }

  if (basis) {
    return getSuffix(basis);
  }

  return 'auto';
};

type Direction = 'column' | 'row';
const getDirection = ({ vertical }: FlexProps): Direction | Direction[] => {
  if (Array.isArray(vertical)) {
    return (vertical as VerticalOptions[]).map((value: VerticalOptions) => {
      if (typeof value === 'boolean') {
        return value === true ? 'column' : 'row';
      }
      return value;
    });
  }

  if (vertical) {
    return 'column';
  }

  return 'row';
};

type Wrap = 'wrap' | 'nowrap';

const getWrap = ({ wrap }: FlexProps): Wrap | Wrap[] => {
  if (Array.isArray(wrap)) {
    return (wrap as WrapOptions[]).map((value: WrapOptions) => {
      if (typeof value === 'boolean') {
        return value === true ? 'wrap' : 'nowrap';
      }
      return value;
    });
  }

  if (wrap) {
    return 'wrap';
  }

  return 'nowrap';
};

const Y_ALIGNMENT_MAP = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  stretch: 'stretch',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
} as const;

type YAlignContent = ValueOf<typeof Y_ALIGNMENT_MAP>;

const yAlignContentToProps = ({
  yAlignContent,
}: FlexProps): YAlignContent | YAlignContent[] => {
  if (Array.isArray(yAlignContent)) {
    return (yAlignContent as VerticalAlignOptions[]).map(
      (value) => Y_ALIGNMENT_MAP[value]
    );
  }

  if (yAlignContent) {
    return Y_ALIGNMENT_MAP[yAlignContent as VerticalAlignOptions];
  }

  return 'flex-start';
};

const X_ALIGNMENT_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  around: 'space-around',
  between: 'space-between',
  evenly: 'space-evenly',
} as const;

type XAlignContent = ValueOf<typeof X_ALIGNMENT_MAP>;

const xAlignContentToProps = ({
  xAlignContent,
}: FlexProps): XAlignContent | XAlignContent[] => {
  if (Array.isArray(xAlignContent)) {
    return (xAlignContent as HorizontalAlignOptions[]).map(
      (value) => X_ALIGNMENT_MAP[value]
    );
  }

  if (xAlignContent) {
    return X_ALIGNMENT_MAP[xAlignContent as HorizontalAlignOptions];
  }

  return 'flex-start';
};

const getDisplay = (props: FlexProps): FlexProps['display'] =>
  props.inline ? 'inline-flex' : 'flex';

export {
  getBasis,
  getDirection,
  getDisplay,
  getGrow,
  getShrink,
  getSuffix,
  getWrap,
  xAlignContentToProps,
  yAlignContentToProps,
};
