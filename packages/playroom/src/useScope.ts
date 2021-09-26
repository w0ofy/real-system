import { useState } from 'react';
import { deep } from '@realsystem/primitive';

function makeState() {
  const [state, setState] = useState(undefined);
  return { state, setState };
}

export default () => ({
  local: makeState(),
  themes: {
    deep,
  },
});
