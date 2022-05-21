import { animated } from '@real-system/animation-library';
import {
  DialogContentPrimitive,
  DialogOverlayPrimitive,
} from '@real-system/dialog-primitive';
import type { StyleProps } from '@real-system/styled-library';
import styled, { majorScale } from '@real-system/styled-library';
import type { PropUnion } from '@real-system/utils-library';

const DialogOverlay = styled(animated(DialogOverlayPrimitive))<
  PropUnion<StyleProps>
>({
  position: 'fixed',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'black-alpha-400',
});

const DialogContent = styled(animated(DialogContentPrimitive))<
  PropUnion<StyleProps>
>({
  position: 'relative',
  boxShadow: 'dialog',
  outline: 0,
  width: '100%',
  maxWidth: majorScale(65),
  minHeight: '150px',
  backgroundColor: 'white',
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 'dialog',
  opacity: 1,
});

export { DialogContent, DialogOverlay };
