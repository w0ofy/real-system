import { useState } from 'react';
import { defaultTheme, useTheme } from '@realsystem/primitive';

function makeState() {
  const [state, setState] = useState(undefined);
  return { state, setState };
}

export default () => ({
  local: makeState(),
  theme: useTheme(),
  themes: {
    default: defaultTheme,
  },
});
