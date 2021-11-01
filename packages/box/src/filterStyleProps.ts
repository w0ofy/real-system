import { STYLE_PROPS } from '@real-system/styling';

const PROPS_TO_BLOCK = [...STYLE_PROPS, 'className', 'style'];

type Props = { [key: string]: any };

const filterStyleProps = (props: Props): Props =>
  Object.keys(props).reduce((newProps: Props, key: string): Props => {
    if (!PROPS_TO_BLOCK.includes(key)) {
      newProps[key] = props[key];
    }
    return newProps;
  }, {});

export { filterStyleProps, PROPS_TO_BLOCK };
