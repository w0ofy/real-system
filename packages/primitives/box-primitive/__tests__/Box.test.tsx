/* eslint-disable react/jsx-closing-tag-location */
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@real-system/theme-library';

import { Box } from '../src/Box';
import { boxAs } from '../src/boxAs';
import { BoxProps } from '../src/types';

const BoxComponent = (props: BoxProps = {}) => (
  <ThemeProvider theme={TEST_THEME}>
    <Box {...props} />
  </ThemeProvider>
);

const queryBoxComponent = () => screen.queryByTestId('real-system-box');
const queryCustomTestId = (testId: string) => screen.queryByTestId(testId);
const styleProps = { marginBottom: 5, color: 'white' };

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

const Anchor = boxAs('a');
const BoxAsAnchor = (props: BoxProps = {}) => (
  <ThemeProvider theme={TEST_THEME}>
    <Anchor {...props} />
  </ThemeProvider>
);
const queryBoxAsAnchor = () => screen.queryByTestId('real-system-box-as');

describe('boxAs', () => {
  it('renders', () => {
    render(<BoxAsAnchor />);
    expect(queryBoxAsAnchor()).toBeTruthy();
  });
  it('renders with a given "data-testid"', () => {
    const props = { 'data-testid': 'custom-box-as' };
    render(<BoxAsAnchor {...props} />);
    expect(queryCustomTestId(props['data-testid'])).toBeTruthy();
  });
  it('renders style props and outputs token values for given style props', () => {
    render(<BoxAsAnchor {...styleProps} />);

    expect(queryBoxAsAnchor()).toHaveStyleRule('margin-bottom', '1rem');
    expect(queryBoxAsAnchor()).toHaveStyleRule('color', '#ffffff');
  });
});
