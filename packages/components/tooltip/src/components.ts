import { animated } from '@real-system/animation-library';
import { Box } from '@real-system/box-primitive';
import styled from '@real-system/styling-library';
import { getToken } from '@real-system/theme-library';

const bg = 'color-background-dark';

const TooltipPopup = styled(animated(Box))`
  z-index: ${getToken(1, 'zIndices')};
  pointer-events: none;
  padding: ${getToken(4, 'space')};
  padding-top: ${getToken(3, 'space')};
  padding-bottom: ${getToken(3, 'space')};
  box-shadow: ${getToken('drop-shadow-neutral-weak-2', 'shadows')};
  background: ${getToken(bg)};
  border: ${getToken('border-1', 'borders')};
  border-radius: ${getToken(2, 'radii')};
  max-width: 30rem;
`;

export { TooltipPopup };
