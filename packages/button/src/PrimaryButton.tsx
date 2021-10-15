import { BoxAs, BoxProps, BoxStyleProps } from '@realsystem/box';
import { styled } from '@realsystem/styling';
import { merge } from '@realsystem/utils';

import { BaseStyles } from './styles';
import { ButtonIntents, ButtonStates, InternalButtonProps } from './types';

type ButtonStyles = Record<ButtonStates, BoxStyleProps>;

const buttonStyles: ButtonStyles = {
  default: merge(BaseStyles.default, {
    color: 'color-text-brand-inverse',
    backgroundColor: 'color-background-brand',
    _hover: {
      backgroundColor: 'color-background-brand-strong',
    },
    _active: {
      backgroundColor: 'color-background-brand-strong',
    },
  }),
  loading: merge(BaseStyles.loading, {
    color: 'color-text-brand-muted',
    backgroundColor: 'color-background-brand-muted',
  }),
  disabled: merge(BaseStyles.disabled, {
    color: 'color-text-brand-muted',
    backgroundColor: 'color-background-brand-muted',
  }),
};

const successButtonStyles: ButtonStyles = {
  default: merge(BaseStyles.default, {
    backgroundColor: 'color-background-success',
    color: 'color-text-inverse',
    _hover: {
      backgroundColor: 'color-background-success-strong',
    },
    _active: {
      backgroundColor: 'color-background-success-strong',
    },
  }),
  loading: merge(BaseStyles.loading, {
    color: 'color-text-success-muted',
    backgroundColor: 'color-background-success-muted',
  }),
  disabled: merge(BaseStyles.disabled, {
    color: 'color-text-success-muted',
    backgroundColor: 'color-background-success-muted',
  }),
};

const dangerButtonStyles: ButtonStyles = {
  default: merge(BaseStyles.default, {
    backgroundColor: 'color-background-danger',
    color: 'color-text-inverse',
    _hover: {
      backgroundColor: 'color-background-danger-strong',
    },
    _active: {
      backgroundColor: 'color-background-danger-strong',
    },
  }),
  loading: merge(BaseStyles.loading, {
    color: 'color-text-danger-muted',
    backgroundColor: 'color-background-danger-muted',
  }),
  disabled: merge(BaseStyles.disabled, {
    color: 'color-text-danger-muted',
    backgroundColor: 'color-background-danger-muted',
  }),
};

const STYLE_MAP: {
  [key in ButtonIntents]: ButtonStyles;
} = {
  default: buttonStyles,
  success: successButtonStyles,
  danger: dangerButtonStyles,
};

export type ButtonProps = Partial<BoxProps> & {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  buttonState: ButtonStates;
};

const BoxAsButton = styled(BoxAs('button'))<BoxProps>({});

const PrimaryButton = ({
  children,
  buttonState,
  intent = 'default',
  ...otherProps
}: InternalButtonProps): React.ReactElement => {
  return (
    <BoxAsButton {...STYLE_MAP[intent][buttonState]} {...otherProps}>
      {children}
    </BoxAsButton>
  );
};

export { PrimaryButton };
