import React from 'react';
import { Meta } from '@storybook/react';

import { AspectRatio } from '@real-system/aspect-ratio';

// @ts-ignore due to lack of declaration file
import img from '../../../../assets/animated-logo.gif';

export default {
  title: 'Components/Aspect Ratio',
  component: AspectRatio,
} as Meta;

export const Image = () => (
  <AspectRatio maxWidth="400px" ratio={4 / 3}>
    <img src={img} alt="naruto" object-fit="cover" />
  </AspectRatio>
);

export const Video = () => (
  <AspectRatio maxWidth="420px" ratio={1}>
    <iframe
      src="https://www.youtube.com/embed/dxo_3I2Z4J0"
      title="5 Tips I WISH I knew when I started Rocket League"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  </AspectRatio>
);
