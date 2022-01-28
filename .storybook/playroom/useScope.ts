import { useState } from 'react';
import { useTheme } from '../../packages/libraries/theme-library/src/index';

function makeState() {
  const [state, setState] = useState(undefined);
  return { state, setState };
}

export default () => ({
  theme: useTheme(),
  local: makeState(),
});
