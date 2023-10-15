import React from 'react';

import type {
  UseLabelOptions,
  UseLabelReturnValue,
} from '@real-system/a11y-library';
import { useLabel } from '@real-system/a11y-library';
import { makeContext } from '@real-system/state-library';
import type { PropUnion } from '@real-system/utils-library';

type FieldControlOptions = {
  hasError?: boolean;
  warningMessage?: React.ReactNode;
  errorMessage?: React.ReactNode;
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
} & FieldControlOptions;

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
    label,
    helpText,
    readonly,
    disabled,
    hasError,
    warningMessage,
    errorMessage,
    'aria-label': ariaLabel,
  }: FieldControlOptions & { children?: React.ReactNode }) {
    const uniqueLabel = label || idProp + '-label';
    const labelConfig = useLabel({
      id: idProp,
      label: uniqueLabel,
      'aria-label': ariaLabel || uniqueLabel,
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
          helpText,
          disabled,
          readonly,
          hasError,
          warningMessage,
          errorMessage,
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

export type { FieldControlOptions, FieldControlValue };
export { FieldControlProvider, makeFieldControlContext, useFieldControl };
