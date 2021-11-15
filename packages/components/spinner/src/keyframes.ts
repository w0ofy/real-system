import { keyframes } from '@real-system/styling';

import { circleCircumference } from './constants';

const svgKeyframes = keyframes`
  0%,
  15% {
    stroke-dashoffset: ${circleCircumference * 0.9999};
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: ${circleCircumference * 0.2};
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: ${circleCircumference * 0.9999};
    transform: rotate(360deg);
  }
`;

const circleKeyframes = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

export { circleKeyframes, svgKeyframes };
