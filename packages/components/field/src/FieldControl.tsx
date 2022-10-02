import React from 'react';

import type {
  UseLabelOptions,
  UseLabelReturnValue,
} from '@real-system/a11y-library';
import { useLabel } from '@real-system/a11y-library';
import { makeContext } from '@real-system/state-library';
import { PropUnion } from '@real-system/utils-library';

type FieldControlValidation = {
  hasError?: boolean;
  warningMessage?: React.ReactNode;
  errorMessage?: React.ReactNode;
};

type FieldControlOptions = {
  validation?: FieldControlValidation;
  required?: boolean;
  helpText?: React.ReactNode;
  readonly?: boolean;
  disabled?: boolean;
  label?: string;
} & Pick<UseLabelOptions, 'id' | 'aria-label'>;

type FieldControlValue = {
  labelProps?: UseLabelReturnValue['labelProps'] &
    Pick<FieldControlValue, 'required'>;
  inputProps?: UseLabelReturnValue['fieldProps'] &
    Pick<FieldControlValue, 'required' | 'readonly' | 'disabled'>;
} & Omit<FieldControlOptions, 'validation'> &
  Required<Pick<FieldControlOptions, 'validation'>>;

type FieldControlProviderType = (props: FieldControlValue) => JSX.Element;
type UseField = (
  fallbacks?: PropUnion<FieldControlOptions>
) => FieldControlValue;

const makeFieldControlProvider = (
  FieldContextProvider: React.Provider<FieldControlValue>
) => {
  return function FieldProvider({
    children,
    required,
    id: idProp,
    validation = {},
    label,
    helpText,
    readonly,
    disabled,
    'aria-label': ariaLabel,
  }: FieldControlOptions & { children?: React.ReactNode }) {
    const labelConfig = useLabel({
      id: idProp,
      label: label || idProp + '-label',
      'aria-label': ariaLabel || label,
    });

    return (
      <FieldContextProvider
        value={{
          inputProps: {
            ...labelConfig.fieldProps,
            required,
            readonly,
            disabled,
          },
          labelProps: {
            ...labelConfig.labelProps,
            required,
          },
          // individual props
          label,
          id: labelConfig.fieldProps.id,
          required,
          validation,
          helpText,
          disabled,
          readonly,
        }}>
        {children}
      </FieldContextProvider>
    );
  };
};

const makeFieldControlHook =
  (useFieldControlContext: UseField) =>
  (fallbacks: FieldControlOptions = {}): FieldControlValue => {
    const context = useFieldControlContext() as unknown as Record<string, any>;
    const labelFactory = useLabel({
      id: fallbacks.id,
      label: fallbacks.label,
    });

    return {
      labelProps: {
        ...labelFactory.labelProps,
        required: fallbacks?.required,
      },
      inputProps: {
        ...labelFactory.fieldProps,
        required: fallbacks?.required,
      },
      validation: {},
      ...fallbacks,
      ...context,
    };
  };

const makeFieldControlContext = (): [FieldControlProviderType, UseField] => {
  const [FieldContextProvider, useFieldControlContext] =
    makeContext<FieldControlValue>(
      {
        strict: false,
        name: 'FieldControlContext',
      },
      {}
    );

  const FieldControlProvider = makeFieldControlProvider(FieldContextProvider);
  const useFieldControl = makeFieldControlHook(useFieldControlContext);

  return [FieldControlProvider, useFieldControl];
};

/**
 * API
 */
const [FieldControlProvider, useFieldControl] = makeFieldControlContext();

export type { FieldControlOptions, FieldControlValidation, FieldControlValue };
export { FieldControlProvider, makeFieldControlContext, useFieldControl };
