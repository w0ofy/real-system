import { css } from './cssFn';
import type { StyleProps } from './styleProps';

const pseudoPropsMap = {
  __moz_focus_inner: '&::-moz-focus-inner',
  __webkit_calendar_picker_indicator_hover:
    '&::-webkit-calendar-picker-indicator:hover',
  __webkit_datetime_edit: '&::-webkit-datetime-edit',
  _active: '&:active, &[data-active=true]',
  _after: '&:after',
  _before: '&:before',
  _checked: '&:checked, &[aria-checked=true]',
  _disabled:
    '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  _even: '&:nth-of-type(even)',
  _expanded: '&[aria-expanded=true], &[data-expanded]',
  _first: '&:first-of-type',
  _firstChild: '&:first-child',
  _focus_placeholder: '&:focus::placeholder',
  _focus: '&:focus',
  _focusVisible: '&:focus-visible, &[data-focus-visible]',
  _focusWithin: '&:focus-within',
  _grabbed: '&[aria-grabbed=true]',
  _groupHover: '[role=group]:hover &',
  _hover_placeholder: '&:hover::placeholder',
  _hover: '&:hover',
  _invalid: '&:invalid, &[aria-invalid=true]',
  _last: '&:last-of-type',
  _lastChild: '&:last-child',
  _mixed: '&:indeterminate, &[aria-checked=mixed]',
  _notFirst: '&:not(:first-of-type)',
  _notLast: '&:not(:last-of-type)',
  _odd: '&:nth-of-type(odd)',
  _placeholder: '&::placeholder',
  _pressed: '&[aria-pressed=true]',
  _readOnly: '&[aria-readonly=true], &[readonly]',
  _selected_focus: '&[aria-selected=true]:focus',
  _selected_focusVisible: '&[aria-selected=true]:focus-visible',
  _selected_hover: '&[aria-selected=true]:hover',
  _selected: '&[aria-selected=true]',
  _visited: '&:visited',
};

type PseudoPropNames = keyof typeof pseudoPropsMap;
type PseudoProps = {
  [key in PseudoPropNames]?: StyleProps | Record<PseudoPropNames, StyleProps>;
};

const getPseudoProps = (
  props: Record<string, any>
): ReturnType<typeof css> | Record<string, any> => {
  const pseudoProps = Object.keys(props).filter((propName) =>
    propName.startsWith('_')
  ) as Array<PseudoPropNames>;

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles: { [key: string]: any } = {};
  pseudoProps.forEach((pseudoProp) => {
    if (pseudoPropsMap[pseudoProp] != null) {
      pseudoStyles[pseudoPropsMap[pseudoProp]] = props[pseudoProp];
    }
  });
  return css(pseudoStyles);
};

const PSEUDO_PROPS = Object.keys(pseudoPropsMap) as PseudoPropNames[];

export type { PseudoPropNames, PseudoProps };
export { getPseudoProps, PSEUDO_PROPS };
