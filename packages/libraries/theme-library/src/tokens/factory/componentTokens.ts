import { buttonTheme } from '../components/button';
import { headingTheme } from '../components/heading';
import { helpTextTheme } from '../components/helpText';
import { labelTheme } from '../components/label';
import { textTheme } from '../components/text';

// @todo make each component config API consistent
const components = {
  button: buttonTheme,
  text: textTheme,
  heading: headingTheme,
  helpText: helpTextTheme,
  label: labelTheme,
};

type TokenizedComponents = typeof components;
type TokenizedComponentNames = keyof TokenizedComponents;

export type { TokenizedComponentNames, TokenizedComponents };
export { components };
