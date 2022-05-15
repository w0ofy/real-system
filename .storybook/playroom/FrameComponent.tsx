import * as React from 'react';
import { ThemeProvider } from '../../packages/libraries/theme-library/src/index';
import { real } from '../../packages/primitives/elements-primitive/src/index';

export default ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <real.div padding={4} height="100vh" width="100vw">
          {children}
        </real.div>
      </ThemeProvider>
    </React.Fragment>
  );
};
