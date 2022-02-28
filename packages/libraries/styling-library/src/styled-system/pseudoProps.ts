import css from '@styled-system/css';

import type { StyleProps } from './styleProps';

const pseudoStylePropsMap = {
  _hover: '&:hover',
  _hover_placeholder: '&:hover::placeholder',
  _active: '&:active, &[data-active=true]',
  _focus: '&:focus',
  _focus_placeholder: '&:focus::placeholder',
  _visited: '&:visited',
  _even: '&:nth-of-type(even)',
  _odd: '&:nth-of-type(odd)',
  _disabled:
    '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  _checked: '&:checked, &[aria-checked=true]',
  _mixed: '&:indeterminate, &[aria-checked=mixed]',
  _selected: '&[aria-selected=true]',
  _selected_hover: '&[aria-selected=true]:hover',
  _selected_focus: '&[aria-selected=true]:focus',
  _selected_focusVisible: '&[aria-selected=true]:focus-visible',
  _invalid: '&:invalid, &[aria-invalid=true]',
  _pressed: '&[aria-pressed=true]',
  _readOnly: '&[aria-readonly=true], &[readonly]',
  _firstChild: '&:first-child',
  _lastChild: '&:last-child',
  _first: '&:first-of-type',
  _last: '&:last-of-type',
  _expanded: '&[aria-expanded=true]',
  _grabbed: '&[aria-grabbed=true]',
  _notFirst: '&:not(:first-of-type)',
  _notLast: '&:not(:last-of-type)',
  _groupHover: '[role=group]:hover &',
  _before: '&:before',
  _after: '&:after',
  _focusWithin: '&:focus-within',
  _focusVisible: '&:focus-visible',
  _placeholder: '&::placeholder',
  __moz_focus_inner: '&::-moz-focus-inner',
  __webkit_datetime_edit: '&::-webkit-datetime-edit',
  __webkit_calendar_picker_indicator_hover:
    '&::-webkit-calendar-picker-indicator:hover',
};

type PseudoStylePropNames = keyof typeof pseudoStylePropsMap;
type PseudoStyleProps = {
  [key in PseudoStylePropNames]?: StyleProps;
};

const getPseudoStyleProps = (
  props: Record<string, any>
): ReturnType<typeof css> | Record<string, any> => {
  const pseudoProps = Object.keys(props).filter((propName) =>
    propName.startsWith('_')
  ) as Array<PseudoStylePropNames>;

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles: { [key: string]: any } = {};
  pseudoProps.forEach((pseudoProp) => {
    if (pseudoStylePropsMap[pseudoProp] != null) {
      pseudoStyles[pseudoStylePropsMap[pseudoProp]] = props[pseudoProp];
    }
  });
  return css(pseudoStyles);
};

const PSEUDO_STYLE_PROPS = Object.keys(
  pseudoStylePropsMap
) as PseudoStylePropNames[];

export type { PseudoStylePropNames, PseudoStyleProps };
export { getPseudoStyleProps, PSEUDO_STYLE_PROPS };
