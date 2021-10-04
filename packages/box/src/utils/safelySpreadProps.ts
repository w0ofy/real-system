import { composeStyleProps } from '@realsystem/styling';

const styleProps = composeStyleProps().propNames!;

export const BOX_PROPS_TO_BLOCK = [...styleProps, 'className', 'style'];

type Props = { [key: string]: any };

export const safelySpreadBoxProps = (props: Props): Props => {
  // https://www.measurethat.net/Benchmarks/Show/6642/0/for-in-vs-reduce-vs-pick#latest_results_block
  return Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (!BOX_PROPS_TO_BLOCK.includes(key)) {
      // eslint-disable-next-line no-param-reassign
      newProps[key] = props[key];
    }
    return newProps;
  }, {});
};
