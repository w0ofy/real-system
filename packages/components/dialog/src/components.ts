import { animated } from '@real-system/animation';
import { composeBoxStyleProps } from '@real-system/box';
import {
  DialogContentPrimitive,
  DialogOverlayPrimitive,
} from '@real-system/dialog-primitive';
import styled from '@real-system/styling';
import { getToken, majorScale } from '@real-system/theme';

import { BoxStyleProps } from '../../../primitives/box/src/types';

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
  background-color: ${getToken('color-background-neutral-strong-1')};
  opacity: 0.25;
  z-index: ${getToken(3, 'zIndices')};
  ${composeBoxStyleProps()}
`;

const DialogContent = styled(animated(DialogContentPrimitive))<BoxStyleProps>`
  box-shadow: ${getToken(6, 'shadows')};
  outline: none;
  width: 100%;
  max-width: ${majorScale(70)};
  min-height: 150px;
  background-color: ${getToken('color-background')};
  border-radius: ${getToken(2, 'radii')};
  display: flex;
  flex-direction: column;
  ${composeBoxStyleProps()}
`;

export { DialogContent, DialogOverlay };
