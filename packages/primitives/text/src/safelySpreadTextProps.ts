import {
  OVERFLOW_PROPS,
  SHADOW_PROPS,
  SPACE_PROPS,
  TEXT_PROPS,
} from '@real-system/styling';

import { PSEUDO_PROP_STYLES } from './pseudoPropStyles';

export const TEXT_PROPS_TO_BLOCK = [
  ...OVERFLOW_PROPS,
  ...SHADOW_PROPS,
  ...SPACE_PROPS,
  ...TEXT_PROPS,
  ...Object.keys(PSEUDO_PROP_STYLES),
  'display',
  'verticalAlign',
  'className',
  'style',
];

type Props = { [key: string]: any };

export const safelySpreadTextProps = (props: Props): Props => {
  // https://www.measurethat.net/Benchmarks/Show/6642/0/for-in-vs-reduce-vs-pick#latest_results_block
  return Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (!TEXT_PROPS_TO_BLOCK.includes(key)) {
      // eslint-disable-next-line no-param-reassign
      newProps[key] = props[key];
    }
    return newProps;
  }, {});
};