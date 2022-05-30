/* eslint-disable react/jsx-closing-tag-location */
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Box } from '@real-system/box';
import { ThemeProvider } from '@real-system/styled-library';
import { Text } from '@real-system/typography';

import { Truncate } from '../src/Truncate';

const TRUNCATED_TEXT = 'This is some extremely long text';
const TruncateComponent = () => (
  <ThemeProvider theme={TEST_THEME}>
    <Box maxWidth="2rem">
      <Text>
        <Truncate title={TRUNCATED_TEXT}>{TRUNCATED_TEXT}</Truncate>
      </Text>
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
