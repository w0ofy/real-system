import type { CSSObject } from '../styled/styled.types';

const pseudoProps = {
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
  _enter: '&[data-enter]',
  _leave: '&[data-leave]',
  _even: '&:nth-of-type(even)',
  _expanded: '&[aria-expanded=true], &[data-expanded]',

  _focus_placeholder: '&:focus::placeholder',
  _focus: '&:focus',
  _focusVisible: '&:focus-visible, &[data-focus-visible]',
  _focusWithin: '&:focus-within',
  _grabbed: '&[aria-grabbed=true]',
  _groupHover: '[role=group]:hover &',
  _hover_placeholder: '&:hover::placeholder',
  _hover: '&:hover',
  _invalid: '&:invalid, &[aria-invalid=true]',

  _first: '&:first-of-type',
  _notFirst: '&:not(:first-of-type)',
  _firstChild: '&:first-child',
  _onlyChild: '&:only-child',
  _notOnlyChild: '&:not(:only-child)',
  _firstAndOnly: '&:first-of-type:only-child',
  _notFirstAndNotOnly: '&:not(:first-of-type):not(:only-child)',
  _firstAndNotOnly: '&:first-of-type:not(:only-child)',
  _notFirstOrLast: '&:not(:first-of-type):not(:last-of-type):not(:only-child)',
  _last: '&:last-of-type',
  _notLast: '&:not(:last-of-type)',
  _lastChild: '&:last-child',
  _lastAndNotOnly: '&:not(:only-child):last-of-type',
  _mixed: '&:indeterminate, &[aria-checked=mixed]',

  _odd: '&:nth-of-type(odd)',
  _placeholder: '&::placeholder',
  _pressed: '&[aria-pressed=true]',
  _readonly: '&[aria-readonly=true], &[readonly]',
  _selected_focus: '&[aria-selected=true]:focus',
  _selected_focusVisible: '&[aria-selected=true]:focus-visible',
  _selected_hover: '&[aria-selected=true]:hover',
  _selected: '&[aria-selected=true]',
  _visited: '&:visited',
  _nested_owl_without_style: '& > *:not(style) ~ *:not(style)',
};

type PseudoPropNames = keyof typeof pseudoProps;
type PseudoProps = {
  [key in PseudoPropNames]?: CSSObject;
};

export type { PseudoPropNames, PseudoProps };
export { pseudoProps };
