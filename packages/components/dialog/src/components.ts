import { animated } from '@real-system/animation';
import { BoxStyleProps, composeBoxStyleProps } from '@real-system/box';
import {
  DialogContentPrimitive,
  DialogOverlayPrimitive,
} from '@real-system/dialog-primitive';
import styled, { polished } from '@real-system/styling';
import { getToken, majorScale } from '@real-system/theme';

const { transparentize } = polished;
const DialogOverlay = styled(animated(DialogOverlayPrimitive))<BoxStyleProps>`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) =>
    transparentize(0.6, getToken('color-background-neutral')({ theme }))};
  ${composeBoxStyleProps()}
`;

const DialogContent = styled(animated(DialogContentPrimitive))<BoxStyleProps>`
  position: relative;
  box-shadow: ${getToken('overlay-shadow-1', 'shadows')};
  outline: 0;
  width: 100%;
  max-width: ${majorScale(65)};
  min-height: 150px;
  background-color: ${getToken('color-background')};
  border-radius: ${getToken(2, 'radii')};
  display: flex;
  flex-direction: column;
  z-index: ${getToken(4, 'zIndices')};
  opacity: 1;
  ${composeBoxStyleProps()}
`;

export { DialogContent, DialogOverlay };
