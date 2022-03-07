import { animated } from '@real-system/animation-library';
import {
  DialogContentPrimitive,
  DialogOverlayPrimitive,
} from '@real-system/dialog-primitive';
import styled, {
  getStyleProps,
  StyleProps,
} from '@real-system/styling-library';
import { getToken, majorScale } from '@real-system/theme-library';
import type { AnyPropUnion } from '@real-system/utils-library';

const DialogOverlay = styled(animated(DialogOverlayPrimitive))<
  AnyPropUnion<StyleProps>
>`
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
  background-color: ${getToken('color-background-overlay')};
  ${getStyleProps}
`;

const DialogContent = styled(animated(DialogContentPrimitive))<
  AnyPropUnion<StyleProps>
>`
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
  z-index: ${getToken('dialog', 'zIndices')};
  opacity: 1;
  ${getStyleProps}
`;

export { DialogContent, DialogOverlay };
