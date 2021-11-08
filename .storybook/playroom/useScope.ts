import { useState } from 'react';
import { useTheme } from '@real-system/theme';

function makeState() {
  const [state, setState] = useState(undefined);
  return { state, setState };
}

export default () => ({
  theme: useTheme(),
  local: makeState(),
});
