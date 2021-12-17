import React from 'react';
import { ThemeProvider } from '../../packages/libraries/theme/src/index';
import { Box } from '../../packages/primitives/box/src/index';

export default ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Box padding={4} height="100vh" width="100vw">
          {children}
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};
