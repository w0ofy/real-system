import { styled } from '@realsystem/styling';
import { BoxStyleProps } from '@realsystem/box';
import { ButtonStates, ButtonVariants, ButtonProps } from './types';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { InternalButtonProps } from './types';

const getButtonState = (
  disabled?: boolean,
  loading?: boolean
): ButtonStates => {
  if (disabled) {
    return 'disabled';
  }
  if (loading) {
    return 'loading';
  }
  return 'default';
};
const BUTTON_VARIANT_MAP: {
  [key in ButtonVariants]: React.FC<InternalButtonProps>;
} = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
};

const Button = ({
  children,
  disabled,
  loading,
  variant = 'primary',
  ...otherProps
}: ButtonProps) => {
  const buttonState = getButtonState(disabled, loading);
  // const showLoading = buttonState === 'loading';
  const showDisabled = buttonState !== 'default';
  const ButtonComponent = BUTTON_VARIANT_MAP[variant];

  return (
    <ButtonComponent
      role="button"
      {...otherProps}
      buttonState={buttonState}
      disabled={showDisabled}>
      {children}
    </ButtonComponent>
  );
};

const ExtendableButton = styled(Button)({});
export { Button };
