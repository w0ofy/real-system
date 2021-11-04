import { useTheme } from '@real-system/theme';

import { useCollapse } from '../../src/hooks/useCollapse';

function makeState() {
  const [state, setState] = useState(undefined);
  return { state, setState };
}

export default () => ({
  theme: useTheme(),
  local: makeState(),
});
