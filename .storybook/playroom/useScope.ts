import { useState } from 'react';
import { useTheme } from '../../packages/libraries/styled-library/src/index';
import { real } from '../../packages/primitives/elements-primitive/src/index';

function makeState() {
  const [state, setState] = useState(undefined);
  return { state, setState };
}

export default () => ({
  theme: useTheme(),
  state: makeState(),
  real: real,
});
