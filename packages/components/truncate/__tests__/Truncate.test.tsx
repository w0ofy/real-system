/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Box } from '@real-system/box-primitive';
import { ThemeProvider } from '@real-system/theme-library';
import { Typography } from '@real-system/typography';

import { Truncate } from '../src/Truncate';

const TRUNCATED_TEXT = 'This is some extremely long text';
const TruncateComponent = () => (
  <ThemeProvider theme={TEST_THEME}>
    <Box maxWidth="2rem">
      <Typography>
        <Truncate title={TRUNCATED_TEXT}>{TRUNCATED_TEXT}</Truncate>
      </Typography>
    </Box>
  </ThemeProvider>
);

const queryTruncate = () => screen.queryByTitle(TRUNCATED_TEXT);

describe('Truncate', () => {
  it('renders', () => {
    render(<TruncateComponent />);
    expect(queryTruncate()).toBeTruthy();
  });
});
