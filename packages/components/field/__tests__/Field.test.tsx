/* eslint-disable react/jsx-closing-tag-location */
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@real-system/styled-library';

import { Field, FieldProps } from '../src';
import { FieldGroupProps } from '../src/components';

const FieldComponent = (props: FieldProps) => (
  <ThemeProvider theme={TEST_THEME}>
    <Field {...props} />
  </ThemeProvider>
);

const helpText = 'Your name';

describe('Field', () => {
  it('renders', () => {
    render(
      <FieldComponent label="Bad label" helpText={helpText}>
        <label htmlFor="input">Good label</label>
        <input id="input" />
      </FieldComponent>
    );
    expect(screen.queryByLabelText('Bad label')).toBeFalsy();
    expect(screen.queryByText(helpText)).toBeFalsy();
    expect(screen.getByLabelText('Good label')).toBeTruthy();
  });
});

const FieldGroupComponent = (props: FieldGroupProps) => (
  <ThemeProvider theme={TEST_THEME}>
    <Field.Group {...props}>
      <Field />
    </Field.Group>
  </ThemeProvider>
);

const getFieldGroup = () => screen.getByTestId('real-system-field-group');

describe('Field Group', () => {
  it('renders', () => {
    render(<FieldGroupComponent />);
    expect(getFieldGroup()).toBeTruthy();
  });
  it('renders inline', () => {
    render(<FieldGroupComponent inline />);
    expect(getFieldGroup()).toBeTruthy();
    expect(getFieldGroup()).toHaveStyleRule('gap', '1.6rem');
    expect(getFieldGroup()).toHaveStyleRule('flex-direction', 'row');
  });
});
