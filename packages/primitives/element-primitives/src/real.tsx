import { AriakitButton } from '@real-system/ariakit-library';
import styled, {
  getPseudoStyleProps,
  getStyleProps,
  StylishProps,
} from '@real-system/styling-library';

const Button = styled(AriakitButton)<StylishProps>(
  getStyleProps,
  getPseudoStyleProps
);

const Real = {
  Button,
};

export { Real };
