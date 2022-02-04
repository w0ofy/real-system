/**
 * Renamed props to make prop api consistent with other component prop names
 */
import React from 'react';

import type {
  SpectrumRadioGroupProps,
  SpectrumRadioProps,
} from '@real-system/react-aria-library';

type RenamedRadioProps = {
  disabled?: SpectrumRadioProps['isDisabled'];
};

type RenamedRadioGroupProps = {
  disabled?: SpectrumRadioGroupProps['isDisabled'];
  readonly?: SpectrumRadioGroupProps['isReadOnly'];
  required?: SpectrumRadioGroupProps['isRequired'];
};

type PropsToRename = 'isDisabled' | 'isReadonly' | 'isRequired';

type CustomProps = {
  helpText?: string;
  errorText?: string;
};

/** Radio */
type RadioProps = RenamedRadioProps &
  Omit<SpectrumRadioProps, PropsToRename> &
  CustomProps;

type AriaRadioProps = SpectrumRadioProps;

/** Radio Group */
type CustomRadioGroupProps = { children?: React.ReactNode };

type RadioGroupProps = RenamedRadioGroupProps &
  Omit<SpectrumRadioGroupProps, PropsToRename> &
  CustomProps &
  CustomRadioGroupProps;

type AriaRadioGroupProps = SpectrumRadioGroupProps & CustomRadioGroupProps;

export type {
  // react aria props
  AriaRadioGroupProps,
  AriaRadioProps,
  CustomProps,
  // real system props
  RadioGroupProps,
  RadioProps,
};
