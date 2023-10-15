/* eslint-disable react/jsx-closing-tag-location */
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { RealSystemProvider } from '@real-system/styled-library';

import type { RealElementPrimitiveProps } from '../src/elements';
import { real } from '../src/elements';

const consoleSpy = jest
  .spyOn(console, 'error')
  .mockImplementation(() => undefined);

const RealElement = (props: RealElementPrimitiveProps = {}) => (
  <RealSystemProvider theme={TEST_THEME}>
    <real.div data-testid="real-element" {...props}>
      contained text
    </real.div>
  </RealSystemProvider>
);

const queryRealElement = () => screen.queryByText('contained text');

const styleProps = {
  marginBottom: 5,
  color: 'white-700',
  boxShadow: 'focus-outline',
};

describe('elements primitive', () => {
  it('returns a component', () => {
    render(<RealElement />);
    expect(queryRealElement()).toBeTruthy();
  });

  it('renders style props and outputs token values for given style props', () => {
    render(<RealElement {...styleProps} />);
    expect(queryRealElement()).toHaveStyleRule('margin-bottom', '1rem');
    expect(queryRealElement()).toHaveStyleRule('color', '#999');
    expect(queryRealElement()).toHaveStyleRule(
      'box-shadow',
      '0 0 0 3px #668cff'
    );
  });

  it('renders the given HTML tag', () => {
    const { container } = render(<real.a />);
    // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
    expect(container.querySelector('a')).toBeTruthy();
  });

  it('allows shouldForwardProp as an option', () => {
    const RealDiv = real<'div', { toNotExist?: string; toExist?: string }>(
      'div',
      {
        shouldForwardProp: (prop: any) => !['toNotExist'].includes(prop),
      }
    );

    render(
      <RealDiv toNotExist="noice!" toExist="uh-oh" data-testid="div">
        real div
      </RealDiv>
    );
    expect(screen.getByText('real div')).not.toHaveAttribute('toNotExist');
    expect(screen.getByText('real div')).toHaveAttribute('toExist');
    expect(consoleSpy).toHaveBeenCalled();
  });
});
