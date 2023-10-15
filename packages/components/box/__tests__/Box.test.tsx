/* eslint-disable react/jsx-closing-tag-location */
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { RealSystemProvider } from '@real-system/styled-library';

import { Box } from '../src/Box';
import type { BoxProps } from '../src/types';

const BoxComponent = (props: BoxProps = {}) => (
  <RealSystemProvider theme={TEST_THEME}>
    <Box {...props} />
  </RealSystemProvider>
);

const queryBoxComponent = () => screen.queryByTestId('real-system-box');
const queryCustomTestId = (testId: string) => screen.queryByTestId(testId);
const styleProps = {
  marginBottom: 5,
  color: 'white',
};

describe('Box', () => {
  it('renders', () => {
    render(<BoxComponent />);
    expect(queryBoxComponent()).toBeTruthy();
  });
  it('renders with a given "data-testid"', () => {
    const props = { 'data-testid': 'custom-box' };
    render(<BoxComponent {...props} />);
    expect(queryCustomTestId(props['data-testid'])).toBeTruthy();
  });
  it('renders style props and outputs token values for given style props', () => {
    render(<BoxComponent {...styleProps} />);
    expect(queryBoxComponent()).toHaveStyleRule('margin-bottom', '1rem');
    expect(queryBoxComponent()).toHaveStyleRule('color', '#ffffff');
  });
});
