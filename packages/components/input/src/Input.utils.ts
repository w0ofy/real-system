import { StylishPropNames } from '@real-system/styling-library';

export const INPUT_PROPS_TO_ALLOW: Partial<Record<StylishPropNames, boolean>> =
  {
    width: true,
  };

type Props = { [key: string]: any };

export const safelySpreadInputProps = (props: Props): Props => {
  // https://www.measurethat.net/Benchmarks/Show/6642/0/for-in-vs-reduce-vs-pick#latest_results_block
  return Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (INPUT_PROPS_TO_ALLOW[key]) {
      // eslint-disable-next-line no-param-reassign
      newProps[key] = props[key];
    }
    return newProps;
  }, {});
};
