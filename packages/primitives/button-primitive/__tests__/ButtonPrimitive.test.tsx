/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@real-system/theme';

import { ButtonPrimitive } from '../src/ButtonPrimitive';
import { ButtonPrimitiveProps } from '../src/types';

const ButtonPrimitiveComponent = (props: ButtonPrimitiveProps) => (
  <ThemeProvider theme={TEST_THEME}>
    <ButtonPrimitive {...props} />
  </ThemeProvider>
);

const queryButtonPrimitive = () =>
  screen.queryByTestId('real-system-button-primitive');

describe('ButtonPrimitive', () => {
  it('renders', () => {
    render(<ButtonPrimitiveComponent />);
    expect(queryButtonPrimitive()).toBeTruthy();
  });
  it('renders style props and outputs token values for given style props', () => {
    const styleProps = { marginBottom: 5, color: 'color-background' };

    render(<ButtonPrimitiveComponent {...styleProps} />);

    expect(queryButtonPrimitive()).toHaveStyleRule('margin-bottom', '1rem');
    expect(queryButtonPrimitive()).toHaveStyleRule('color', '#ffffff');
  });

  describe('As button', () => {
    it('can be disabled with proper a11y rules', () => {
      render(<ButtonPrimitiveComponent disabled />);
      expect(queryButtonPrimitive()?.getAttribute('disabled')).not.toBeNull();
    });
  });

  describe('As anchor', () => {
    it('can be disabled with proper a11y rules', () => {
      render(<ButtonPrimitiveComponent as="a" disabled />);
      expect(
        queryButtonPrimitive()?.getAttribute('aria-disabled')
      ).toBeTruthy();
    });
  });

  describe('As span', () => {
    it('can be disabled with proper a11y rules', () => {
      render(<ButtonPrimitiveComponent as="span" disabled />);
      expect(
        queryButtonPrimitive()?.getAttribute('aria-disabled')
      ).toBeTruthy();
    });
  });
});
