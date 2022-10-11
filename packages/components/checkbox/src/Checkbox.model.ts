import type { ValidationProps } from '@real-system/utils-library';

/** @todo do we need this? */
type CustomProps = {
  helpText?: string;
} & Pick<ValidationProps, 'hasError'>;

export type { CustomProps };
