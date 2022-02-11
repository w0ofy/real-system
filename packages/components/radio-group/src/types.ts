/**
 * Renamed props to make prop api consistent with other component prop names
 */
import React from 'react';

import type {
  AriaRadioGroupProps,
  AriaRadioProps,
} from '@real-system/a11y-library';

type CustomProps = {
  disabled?: boolean;
  helpText?: string;
  errorText?: string;
};

/** Radio */
type RadioProps = AriaRadioProps & CustomProps;

/** Radio Group */
type CustomRadioGroupProps = {
  children?: React.ReactNode;
  readonly?: boolean;
  required?: boolean;
};

type RadioGroupProps = AriaRadioGroupProps &
  CustomProps &
  CustomRadioGroupProps;

export type {
  // react aria props
  CustomProps,
  // real system props
  RadioGroupProps,
  RadioProps,
};
