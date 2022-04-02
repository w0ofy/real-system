/* eslint-disable react/jsx-closing-tag-location */
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@real-system/theme-library';

import { ButtonPrimitive } from '../src/ButtonPrimitive';
import { ButtonPrimitiveProps } from '../src/types';

const ButtonPrimitiveComponent = (props: ButtonPrimitiveProps) => (
  <ThemeProvider theme={TEST_THEME}>
    <ButtonPrimitive data-testid="button-primitive" {...props} />
  </ThemeProvider>
);

const queryButtonPrimitive = () => screen.queryByTestId('button-primitive');

describe('ButtonPrimitive', () => {
  it('renders', () => {
    render(<ButtonPrimitiveComponent />);
    expect(queryButtonPrimitive()).toBeTruthy();
  });
  it('renders style props and outputs token values for given style props', () => {
    const styleProps = { marginBottom: 5, color: 'white' };

    render(<ButtonPrimitiveComponent {...styleProps} />);

    expect(queryButtonPrimitive()).toHaveStyleRule('margin-bottom', '1rem');
    expect(queryButtonPrimitive()).toHaveStyleRule('color', '#ffffff');
  });

  describe('As button', () => {
    it('is disabled with proper a11y rules', () => {
      render(<ButtonPrimitiveComponent disabled />);
      expect(queryButtonPrimitive()?.getAttribute('disabled')).not.toBeNull();
    });
  });

  describe('As span', () => {
    it('is disabled with proper a11y rules', () => {
      render(<ButtonPrimitiveComponent disabled />);
      expect(
        queryButtonPrimitive()?.getAttribute('aria-disabled')
      ).toBeTruthy();
    });
  });
});
