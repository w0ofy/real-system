import { css } from '@real-system/styling';

import type { ButtonPrimitiveProps } from '../types';

/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 * Based on the excellent work done in https://github.com/chakra-ui/chakra-ui
 */
const PSEUDO_PROP_STYLES = {
  _hover: '&:hover',
  _active: '&:active, &[data-active=true]',
  _focus: '&:focus',
  _focusWithin: '&:focus-within',
  _focusVisible: '&:focus-visible',
  __moz_focus_inner: '&::-moz-focus-inner',
  _visited: '&:visited',
  _even: '&:nth-of-type(even)',
  _odd: '&:nth-of-type(odd)',
  _disabled:
    '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  _invalid: '&:invalid, &[aria-invalid=true]',
  _pressed: '&[aria-pressed=true]',
  _first: '&:first-of-type',
  _last: '&:last-of-type',
  _notFirst: '&:not(:first-of-type)',
  _notLast: '&:not(:last-of-type)',
};
/**
 * Take _ prefixed style props and convert them to custom style props for CSS pseudo selectors
 *
 * @param {ButtonPrimitiveProps} props any prop that ButtonPrimitive can take
 * @return {*}  {(((props?: Record<string, unknown> | undefined) => CSSObject) | Record<string, never>)}
 */
const getPseudoButtonStyles = (
  props: ButtonPrimitiveProps
): ReturnType<typeof css> | Record<string, any> => {
  const pseudoProps = Object.keys(props).filter((propName) =>
    propName.startsWith('_')
  ) as Array<keyof typeof PSEUDO_PROP_STYLES>;

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles: { [key: string]: any } = {};
  pseudoProps.forEach((pseudoProp) => {
    if (PSEUDO_PROP_STYLES[pseudoProp] != null) {
      pseudoStyles[PSEUDO_PROP_STYLES[pseudoProp]] = props[pseudoProp];
    }
  });

  return css(pseudoStyles);
};

export { getPseudoButtonStyles, PSEUDO_PROP_STYLES };
