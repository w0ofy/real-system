import { useState } from 'react';
import { useTheme } from '../../packages/libraries/theme-library/src/index';
import { real } from '../../packages/primitives/elements-primitive/src/index';

function makeState() {
  const [state, setState] = useState(undefined);
  return { state, setState };
}

export default () => ({
  theme: useTheme(),
  local: makeState(),
  real: real,
});
