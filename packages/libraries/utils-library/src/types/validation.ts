type ValidationMessages = {
  warningMessage?: React.ReactNode;
  errorMessage?: React.ReactNode;
  helpText?: React.ReactNode;
};

type ValidationFlags = {
  hasError?: boolean;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
};

type ValidationProps = ValidationMessages & ValidationFlags;

export type { ValidationFlags, ValidationMessages, ValidationProps };
