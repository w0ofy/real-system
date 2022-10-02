import React from 'react';

import type { UseLabelReturnValue } from '@real-system/a11y-library';
import { useLabel } from '@real-system/a11y-library';
import { makeContext } from '@real-system/state-library';
import { PropUnion } from '@real-system/utils-library';

type FieldControlOptions = {
  validation?: {
    hasError?: boolean;
    warningMessage?: React.ReactNode;
    errorMessage?: React.ReactNode;
  };
  required?: boolean;
  id?: string;
};

type FieldControl = {
  labelProps?: UseLabelReturnValue['labelProps'] &
    Pick<FieldControl, 'required'>;
  inputProps?: UseLabelReturnValue['fieldProps'] &
    Pick<FieldControl, 'required'>;
} & FieldControlOptions;

type FieldProviderProps = FieldControlOptions & { children?: React.ReactNode };

type UseFieldControlReturnValue = [
  {
    Provider: (props: FieldControl) => JSX.Element;
    useField: () => FieldControl;
  },
  FieldControl,
  PropUnion<FieldControl>
];
/**
 * @todo refine and release
 * Safe hook for using `FieldControlContext`
 */
const useFieldControl = (
  fallbacks: FieldControl
): UseFieldControlReturnValue => {
  const [FieldContextProvider, useFieldContext] = makeContext<FieldControl>({
    strict: false,
    name: 'FieldControlContext',
  });

  const context = useFieldContext();
  const labelFactory = useLabel({ id: fallbacks?.id });

  const FieldProvider = ({
    children,
    required,
    id: idProp,
    validation = {},
  }: FieldProviderProps) => {
    const label = useLabel({ id: idProp });

    return (
      <FieldContextProvider
        value={{
          inputProps: {
            ...label.fieldProps,
            required,
          },
          labelProps: {
            ...label.labelProps,
            required,
          },
          // individual props
          id: label.fieldProps.id!,
          required,
          validation: validation || {},
        }}>
        {children}
      </FieldContextProvider>
    );
  };

  const Field = { Provider: FieldProvider, useField: useFieldContext };
  if (!context) {
    return [
      Field,
      {
        labelProps: {
          ...labelFactory.labelProps,
          required: fallbacks?.required,
        },
        inputProps: {
          ...labelFactory.fieldProps,
          required: fallbacks?.required,
        },
      },
      fallbacks,
    ];
  }

  return [Field, context, fallbacks];
};

export type { FieldControl, FieldControlOptions };
export { useFieldControl };
