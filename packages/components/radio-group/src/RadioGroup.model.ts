import type {
  AriaRadioGroupProps,
  AriaRadioProps,
} from '@real-system/a11y-library';
import { RealSystemChildrenProp } from '@real-system/styled-library';
import type { InvalidConfig } from '@real-system/typography';

type CustomProps = {
  disabled?: boolean;
  invalid?: InvalidConfig;
};

/** Radio */
type RadioProps = AriaRadioProps & CustomProps;

/** Radio Group */
type CustomRadioGroupProps = {
  readonly?: boolean;
  required?: boolean;
} & RealSystemChildrenProp;

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
