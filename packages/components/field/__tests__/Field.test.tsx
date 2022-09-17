/* eslint-disable react/jsx-closing-tag-location */
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Input } from '@real-system/input';
import { ThemeProvider } from '@real-system/styled-library';

import { Field, FieldProps } from '../src';
import { FieldGroupProps } from '../src/types';

const FieldComponent = (props: FieldProps) => (
  <ThemeProvider theme={TEST_THEME}>
    <Field {...props} />
  </ThemeProvider>
);

const inputId = 'name';
const helperText = 'Your name';
const invalid = { status: false, message: 'error' };
const FieldInput = () => <Input id={inputId} type="text" />;

describe('Field', () => {
  it('renders with builtins', () => {
    const { rerender } = render(
      <FieldComponent label="Name" labelFor={inputId} helperText={helperText}>
        <FieldInput />
      </FieldComponent>
    );
    expect(screen.getByLabelText('Name')).toBeTruthy();
    expect(screen.getByText(helperText)).toBeTruthy();
    expect(screen.queryByText(invalid.message)).toBeFalsy();

    rerender(
      <FieldComponent
        label="Name"
        labelFor={inputId}
        helperText={helperText}
        invalid={{ ...invalid, status: true }}>
        <FieldInput />
      </FieldComponent>
    );

    expect(screen.queryByText(helperText)).toBeFalsy();
    expect(screen.getByText(invalid.message)).toBeTruthy();
  });
  it('renders without builtins', () => {
    render(
      <FieldComponent
        builtIns={false}
        label="Bad label"
        helperText={helperText}>
        <label htmlFor="input">Good label</label>
        <input id="input" />
      </FieldComponent>
    );
    expect(screen.queryByLabelText('Bad label')).toBeFalsy();
    expect(screen.queryByText(helperText)).toBeFalsy();
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
